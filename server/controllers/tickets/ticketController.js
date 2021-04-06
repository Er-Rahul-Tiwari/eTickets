const Ticket = require('../../models/ticketModel');
const catchAsync = require('../../utils/catchAsync');
// const factory = require('./handlerFactory');
const Email = require('../../utils/email');
const APIFeatures = require('../../utils/apiFeatures');
const { check, validationResult } = require('express-validator');
const response = require('../../utils/response');


exports.createTicket = catchAsync(async(req, res, next) => {
    console.log(req.body);
    const errors = validationResult(req);

    if (!errors.isEmpty()){
        return response.errorResponse(res, errors.array(), errors.msg, 200, false);
    }

    req.body = (JSON.parse(JSON.stringify(req.body)));
    if (req.body.chargePaidBy === 'user'){
        req.body.price = req.body.price + ((req.body.price) * (5/100));
    }

    req.body['user'] = req.user.id;
    const doc = await Ticket.create(req.body);
    await new Email(req.user, '').ticketCreated();

    return response.successResponse(res, doc,
        'Created', 200, true);
})


exports.getAllTickets = catchAsync(async (req, res, next) => {
    // console.log(req.params, '\n',req.user);
    let filter = {};
    if (req.params.ticketId) filter = { ticket: req.params.ticketId };
    let features = null;
    if((req.user.role).includes('admin')){
        features = new APIFeatures(Ticket.find(filter), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    } else {
        features = new APIFeatures(Ticket.find({user: req.user.id}), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    }
    const doc = await features.query;

    response.successResponse(res, doc,
        `${doc.length} items fetched`, 200, true);
  
});

exports.getTicket = catchAsync(async (req, res, next) => {
    let query = Ticket.findById(req.params.id);
    if ({ path: "reviews" }) query = query.populate({ path: "reviews" });
    const doc = await query;

    if (!doc) {
        return next(new AppError('No document found with that ID', 200));
    }

    response.successResponse(res, doc,
        'Fetch success', 200, true);
});

exports.updateTicket = catchAsync(async (req, res, next) => {
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

exports.deleteTicket = catchAsync(async (req, res, next) => {
    const doc = await Ticket.findByIdAndDelete(req.params.id);
  
    if (!doc) {
      return next(new AppError('No document found with that ID', 200));
    }
  
    response.successResponse(res, {},
      'deleted', 200, true);
    });


exports.viewTicketForOneEvent =   catchAsync(async (req, res, next) => {
    if ((req.user.role).includes('admin')){
      console.log(req.params);
      let filter = {};
      if (req.params.eventId) filter = { event: req.params.eventId };

      const features = new APIFeatures(Ticket.find(filter), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    } else {
      let filter = {};
      const features = new APIFeatures(Ticket.find({event: req.params.eventId, user: req.user.id}), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    }
      const doc = await features.query;
      response.successResponse(res, doc,
        `${doc.length} items fetched`, 200, true);
});