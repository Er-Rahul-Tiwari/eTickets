const mongoose = require('mongoose');
const slugify = require('slugify');
const User = require('./userModel');
const Event = require('./eventModel');
const refValidator = require('mongoose-referrence-validator');
// const validator = require('validator');

const ticketSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Ticket must belong to a Manager!']      
    },
    event: {
      type: mongoose.Schema.ObjectId,
      ref: 'Event',
      required: [true, 'Ticket must belong to an Event!']
    },
    ticketType: {
      enum: ['paid', 'free', 'donation'],
      type: String,
      required: [true, 'Ticket must have types!']
    },
    ticketName: {
      type: String,
      required: [true, 'Ticket must have name!'],
      unique: true
    },
    currency: {
      type: String,
      required: [true, 'Ticket price must have currency!'],
    },
    chargePaidBy: {
      type: String,
      enum: ['user', 'event_manager'],
      // required: [true, 'mandatory to give charges']
    },
    price: {
      type: Number,
      required: [true, 'Ticket must have price!'],
    },
    quantity: {
      type: Number,
      default: null
    },
    active: {
      type: Boolean,
      default: true
    },
    salesChannel: {
      type: String,
      enum: ['everywhere', 'online', 'atd'],
      default: 'everywhere'
    },
    minQuantity: {
      type: Number,
      default: 1
    },
    maxQuantity: {
      type: Number,
      default: 1
    },
    ticketSalesStartDate: {
      type: Date,
      default: null
    },
    ticketSalesEndDate: {
      type: Date,
      default: null
    },
    dateTimeStart: {
      type: Date,
      default: null
    },
    dateTimeEnd: {
      type: Date,
      default: null
    },
    sold: {
      type: Number,
      default: 0
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);


ticketSchema.pre('save', function(next) {
  this.slug = slugify(this.ticketName, { lower: true });
  next();
});


// function dateValidation(val){
//   return 
// }

ticketSchema.plugin(refValidator);

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;