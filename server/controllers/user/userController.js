const multer = require('multer');
const sharp = require('sharp');
const User = require('../../models/userModel');
const catchAsync = require('../../utils/catchAsync');
const { check, validationResult } = require('express-validator');
const createSendToken = require('./authController').exposedCookie;
const response = require('../../utils/response');
const AppError = require('../../utils/appError');
const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 200), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadUserPhoto = upload.single('photo');

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  next();
});

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  console.log(req.body);
  if (req.body.email){
    return next(
      new AppError(
        'This route is not for email updates.',
        200
      )
    );    
  }
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. use /updateMyPassword',
        200
      )
    );
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated
  // const filteredBody = filterObj();
  if (req.file) req.body.photo = req.file.filename;

  // 3) Update user document
  console.log(req.body);
  const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true
  });

  return response.successResponse(res, updatedUser, 'User updated', 200, true);
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(200).json({
    status: 'success',
    data: null
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not defined! Please use /signup instead'
  });
};

exports.getUser = catchAsync(async (req, res, next) => {
  let query = User.findById(req.params.id);
  if ({ path: "reviews" }) query = query.populate({ path: "reviews" });
  const doc = await query;

  if (!doc) {
      return next(new AppError('No document found with that ID', 200));
  }

  response.successResponse(res, doc,
      'Fetch success', 200, true);
});
exports.getAllUsers = catchAsync(async (req, res, next) => {
  // console.log(req.params, '\n',req.user);
  let filter = {};
  // if (req.params.ticketId) filter = { user: req.params.ticketId };
  let features = null;
  if((req.user.role).includes('admin')){
      features = new APIFeatures(User.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
  } else {
      features = new APIFeatures(User.find({user: req.user.id}), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
  }
  const doc = await features.query;

  response.successResponse(res, doc,
      `${doc.length} items fetched`, 200, true);

});

// Do NOT update passwords with this!
exports.updateUser =  catchAsync(async (req, res, next) => {
  req.body = (JSON.parse(JSON.stringify(req.body)));
  let doc = null;
  if((req.user.role).includes('admin')){
    doc = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
    })
  } else {
    doc = await Ticket.updateOne({_id: req.params.id, user: req.user._id}, {$set: req.body}, {
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

exports.deleteUser = catchAsync(async (req, res, next) => {
  const doc = await User.findByIdAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError('No document found with that ID', 200));
  }

  response.successResponse(res, {},
    'deleted', 200, true);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return response.errorResponse(res, errors.array(), errors.msg, 200, false);
  }  
  // 1) Get user from collection
  const user = await User.findById(req.user.id).select("+password");

  // 2) Check if POSTed current password is correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError("Your current password is wrong.", 200));
  }

  // 3) If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  // User.findByIdAndUpdate will NOT work as intended!

  // 4) Log user in, send JWT
  createSendToken(user, 200, req, res);
});
