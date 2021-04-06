// const catchAsync = require('./../utils/catchAsync');
// const AppError = require('./../utils/appError');
// const { check, validationResult } = require('express-validator');
// const APIFeatures = require('./../utils/apiFeatures');
// const Email = require('./../utils/email');
// const response = require('./../utils/response');

// exports.deleteOne = Model =>
//   catchAsync(async (req, res, next) => {
//     const doc = await Model.findByIdAndDelete(req.params.id);

//     if (!doc) {
//       return next(new AppError('No document found with that ID', 200));
//     }

//     response.successResponse(res, {},
//       'deleted', 200, true);
//   });

// exports.updateOne = Model =>
//   catchAsync(async (req, res, next) => {
//     req.body = (JSON.parse(JSON.stringify(req.body)));
//     if((req.user.role).includes('admin')){
//       const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     if (!doc) {
//       return next(new AppError('No document found with that ID', 200));
//     }

//     response.successResponse(res, doc,
//       'Updated', 200, true);

//   } else{

//       const doc = await Model.updateOne({_id: req.params.id, user: req.user._id}, {$set: req.body}, {
//       new: true,
//       runValidators: true
//     });

//     if (!doc) {
//       return next(new AppError(`No document found with that ID or you don't have the permission 
//         to perform this action`, 200));
//     }

//     response.successResponse(res, doc,
//       'Updated', 200, true);

//   }
// });

// exports.createOne = Model =>
//   catchAsync(async (req, res, next) => {
//     const errors = validationResult(req);
//     req.body = (JSON.parse(JSON.stringify(req.body)));
//     console.log(req.body);
    
//     if (!errors.isEmpty()){
//       return response.errorResponse(res, errors.array(), errors.msg, 200, false);
//     }

//     req.body['user'] = req.user.id;
//     const doc = await Model.create(req.body);

//     return response.successResponse(res, doc,
//       'Created', 200, true);
//   });

// exports.getOne = (Model, popOptions) =>
//   catchAsync(async (req, res, next) => {
//     let query = Model.findById(req.params.id);
//     if (popOptions) query = query.populate(popOptions);
//     const doc = await query;

//     if (!doc) {
//       return next(new AppError('No document found with that ID', 200));
//     }

//     response.successResponse(res, doc,
//       'Fetch success', 200, true);
//   });

// exports.getForEvent = (Model, popOptions) =>
//   catchAsync(async (req, res, next) => {
//     if ((req.user.role).includes('admin')){
//       console.log(req.params);
//       // To allow for nested GET reviews on event (hack)
//       let filter = {};
//       if (req.params.eventId) filter = { event: req.params.eventId };

//       const features = new APIFeatures(Model.find(filter), req.query)
//         .filter()
//         .sort()
//         .limitFields()
//         .paginate();
//       const doc = await features.query;

//       response.successResponse(res, doc,
//         `${doc.length} items fetched`, 200, true);
//     } else {
//       let filter = {};

//       const features = new APIFeatures(Model.find({event: req.params.eventId, user: req.user.id}), req.query)
//         .filter()
//         .sort()
//         .limitFields()
//         .paginate();
//       const doc = await features.query;
//       response.successResponse(res, doc,
//         `${doc.length} items fetched`, 200, true);

//   }
// });

// exports.getAll = Model =>
//   catchAsync(async (req, res, next) => {
//     if ((req.user.role).includes('admin')){
//       console.log(req.params, '\n',req.user);
//       let filter = {};
//       if (req.params.eventId) filter = { event: req.params.eventId };

//       const features = new APIFeatures(Model.find(filter), req.query)
//         .filter()
//         .sort()
//         .limitFields()
//         .paginate();
//       const doc = await features.query;

//       response.successResponse(res, doc,
//         `${doc.length} items fetched`, 200, true);

//     } else {
//       let filter = {};

//       const features = new APIFeatures(Model.find({user: req.user.id}), req.query)
//         .filter()
//         .sort()
//         .limitFields()
//         .paginate();
//       const doc = await features.query;
//       response.successResponse(res, doc,
//         `${doc.length} items fetched`, 200, true);      
//   }
// });