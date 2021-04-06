const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const Lead = require('./../models/leadModel');
// const factory = require('./handlerFactory');

exports.getAllLeads = catchAsync(async (req, res, next) => {
    // console.log(req.params, '\n',req.user);
    let filter = {};
    if (req.params.ticketId) filter = { Lead: req.params.LeadId };
    let features = null;
    if((req.user.role).includes('admin')){
        features = new APIFeatures(Lead.find(filter), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    } else {
        features = new APIFeatures(Lead.find({user: req.user.id}), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    }
    const doc = await features.query;

    response.successResponse(res, doc,
        `${doc.length} items fetched`, 200, true);
  
});

exports.getLead = catchAsync(async (req, res, next) => {
    let query = Lead.findById(req.params.id);
    if ({ path: "reviews" }) query = query.populate({ path: "reviews" });
    const doc = await query;

    if (!doc) {
        return next(new AppError('No document found with that ID', 200));
    }

    response.successResponse(res, doc,
        'Fetch success', 200, true);
});

exports.createLead =   catchAsync(async (req, res, next) => {
    const errors = validationResult(req);
    req.body = (JSON.parse(JSON.stringify(req.body)));
    console.log(req.body);
    
    if (!errors.isEmpty()){
      return response.errorResponse(res, errors.array(), errors.msg, 200, false);
    }

    req.body['user'] = req.user.id;
    const doc = await Lead.create(req.body);

    return response.successResponse(res, doc,
      'Created', 200, true);
  });

exports.updateLead = catchAsync(async (req, res, next) => {
    req.body = (JSON.parse(JSON.stringify(req.body)));
    let doc = null;
    if((req.user.role).includes('admin')){
      doc = await Lead.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
      })
    } else {
      doc = await Lead.updateOne({_id: req.params.id, user: req.user._id}, {$set: req.body}, {
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
  
exports.deleteLead = catchAsync(async (req, res, next) => {
    const doc = await Lead.findByIdAndDelete(req.params.id);
  
    if (!doc) {
      return next(new AppError('No document found with that ID', 200));
    }
  
    response.successResponse(res, {},
      'deleted', 200, true);
  });
