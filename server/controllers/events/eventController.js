const multer = require('multer');
const sharp = require('sharp');
const Event = require('../../models/eventModel');
const sizeOf = require('image-size');
const catchAsync = require('../../utils/catchAsync');
const { check, validationResult } = require('express-validator');
const fs = require('fs');
const Email = require('../../utils/email');
const APIFeatures = require('../../utils/apiFeatures');
const response = require('../../utils/response');
const AppError = require('../../utils/appError');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 200), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadEventImages = upload.fields([
  { name: "imageCover", maxCount: 1 },
  { name: "images" },
]);

exports.resizeEventImages = catchAsync(async (req, res, next) => {
  if (!req.files) return next();

  // 1) Cover image
  if (req.files.imageCover) {

    const uniqueImg = req.params.id || req.user.id + "-" + req.body.name;
    const imageCover = `event-${uniqueImg}-${Date.now()}-cover.jpeg`;
    req.body.imageCover = imageCover;

    await sharp(req.files.imageCover[0].buffer)
      .toFormat("jpeg")
      // .resize(2500, 1400)
      .jpeg({ quality: 90 })
      .toFile(`public/img/events/${imageCover}`);

    const dimensions = await sizeOf(`public/img/events/${imageCover}`);
    if (dimensions.width <= 2160 && dimensions.height <= 1080){
      fs.unlinkSync(`public/img/events/${imageCover}`);
      return next(new AppError('Please provide image of 1080x2160 or more resolution', 200));
    }
  }

  // 2) Images
  if (req.files.images) {
    req.body.images = [];
    await Promise.all(
      req.files.images.map(async (file, i) => {
        const uniqueImg = req.params.id || req.user.id + "-" + req.body.name;
        const filename = `event-${uniqueImg}-${Date.now()}-${i + 1}.jpeg`;

        await sharp(file.buffer)
          .toFormat("jpeg")
          .jpeg({ quality: 90 })
          .toFile(`public/img/events/${filename}`);

        req.body.images.push(filename);
      })
    );
  }

  next();
});

exports.createEvent = catchAsync(async (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()){
    return response.errorResponse(res, errors.array(), errors.msg, 200, false);
  }

  req.body = (JSON.parse(JSON.stringify(req.body)));
  console.log(req.body);

  req.body['user'] = req.user.id;
  const doc = await Event.create(req.body);
  await new Email(req.user, '').eventCreated();
      
  return response.successResponse(res, doc,
    'Created', 200, true);
});


exports.getAllEvents = catchAsync(async (req, res, next) => {
  console.log(req.params, '\n',req.user);
  // To allow for nested GET reviews on event (hack)
  let filter = {};
  if (req.params.eventId) filter = { event: req.params.eventId };
  let features = null;

  if((req.user.role).includes('admin')){
    features = new APIFeatures(Event.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
  } else {
    features = new APIFeatures(Event.find({user: req.user.id}), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
  }
  const doc = await features.query;

  return response.successResponse(res, doc,
    `${doc.length} items fetched`, 200, true);

});


exports.getEvent = catchAsync(async (req, res, next) => {
  let query = Event.findById(req.params.id);
  if ({ path: "reviews" }) query = query.populate({ path: "reviews" });
  const doc = await query;

  if (!doc) {
    return next(new AppError('No document found with that ID', 200));
  }

  response.successResponse(res, doc,
    'Fetch success', 200, true);
});

exports.updateEvent = catchAsync(async (req, res, next) => {
  req.body = (JSON.parse(JSON.stringify(req.body)));
  let doc = null;
  if((req.user.role).includes('admin')){
    doc = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
    })
  } else {
    doc = await Event.updateOne({_id: req.params.id, user: req.user._id}, {$set: req.body}, {
      new: true,
      runValidators: true
    });
  }

  if (!doc) {
    return next(new AppError('No document found with that ID', 200));
  }

  response.successResponse(res, doc,
    'Updated', 200, true);
});

exports.deleteEvent = catchAsync(async (req, res, next) => {
  const doc = await Event.findByIdAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError('No document found with that ID', 200));
  }

  response.successResponse(res, {},
    'deleted', 200, true);
});