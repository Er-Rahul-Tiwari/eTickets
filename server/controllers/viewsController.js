const Event = require('../models/eventModel');
const User = require('../models/userModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.alerts = (req, res, next) => {
  const { alert } = req.query;
  if (alert === 'booking')
    res.locals.alert =
      "Your booking was successful! Please check your email for a confirmation. If your booking doesn't show up here immediatly, please come back later.";
  next();
};

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get event data from collection
  const events = await Event.find();

  // 2) Build template
  // 3) Render that template using event data from 1)
  // res.status(200).render('overview', {
  //   title: 'All Tours',
  //   events
  // });
  res.status(200).json({
    status: true, data: {
      title: 'All events', events: events
    }
  })
});

exports.getEvent = catchAsync(async (req, res, next) => {
  // 1) Get the data, for the requested event (including reviews and guides)
  const event = await Event.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });

  if (!event) {
    return next(new AppError('There is no event with that name.', 404));
  }

  // 2) Build template
  // 3) Render template using data from 1)
  res.status(200).render('event', {
    title: `${event.name} Event`,
    event
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account'
  });
};

exports.getMyEvents = catchAsync(async (req, res, next) => {
  // 1) Find all bookings
  const bookings = await Booking.find({ user: req.user.id });

  // 2) Find events with the returned IDs
  const eventIDs = bookings.map(el => el.event);
  const events = await Event.find({ _id: { $in: eventIDs } });

  res.status(200).render('overview', {
    title: 'My Events',
    events
  });
});

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email
    },
    {
      new: true,
      runValidators: true
    }
  );

  res.status(200).render('account', {
    title: 'Your account',
    user: updatedUser
  });
});
