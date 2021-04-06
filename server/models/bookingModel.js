const mongoose = require('mongoose');
const refValidator = require('mongoose-referrence-validator');
const Ticket = require('./ticketModel');

const bookingSchema = new mongoose.Schema({
  event: {
    type: mongoose.Schema.ObjectId,
    ref: 'Event',
    required: [true, 'Booking must belong to a Event!']
  },
  ticket: {
    type: mongoose.Schema.ObjectId,
    ref: 'Ticket',
    required: [true, 'Booking must belong to a Ticket!']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Booking must belong to a User!']
  },
  ticketName: {
    type: String,
    default: null
  },
  bookingId: {
    type: String,
    unique: true
  },
  orderId: {
    type: String,
    unique: true
  },
  paymentId: {
    type: String,
    default: null
 },
  price: {
    type: Number,
    require: [true, 'Booking must have a price.']
  },
  quantity: {
    type: Number,
    required: [true, 'Booking must have ticket quantity']
  },
  createdOrCompletedAt: {
    type: Date,
    default: Date.now()
  },
  // paid: {
  //   type: Boolean,
  //   default: true
  // },
  status: {
    type: String,
    default: null
  },
  paymentMethod: {
    type: String,
    default: null
  },
  refund: {
    type: String,
    default: null
  },
  refundStatus: {
    type: String,
    default: null
  },
  currencyPaid: {
    type: String,
    default: null
  },
  couponOrDiscount:{
    type: String,
    default: null
  },
  vpa: {
    type: String,
    default: null
  },
  card: {
    type: {},
    default: null
  }
});

bookingSchema.pre(/^find/, function(next) {
  this.populate('user').populate({
    path: 'event',
    select: 'name'
  });
  next();
});

bookingSchema.plugin(refValidator);


const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
