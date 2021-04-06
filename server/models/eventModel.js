const mongoose = require('mongoose');
const slugify = require('slugify');
const User = require('./userModel');
const Organiser = require('./organizerModel');
const validator = require('validator');
const refValidator = require('mongoose-referrence-validator');

const eventSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: User,
      required: [true, 'Event must belong to a Manager!']
    },
    name: {
      type: String,
      required: [true, 'event must have a name'],
      trim: true,
      maxlength: [50, 'event name must have less or equal then 50 characters'],
      minlength: [1, 'event name must have more or equal then 1 characters']
    },
    venueType: {
      type: String,
      required: [true, 'event must have a venue type'],
      enum: ['online', 'venue', 'toBeAnnounced']
    },
    eventTypeId: {
      type: mongoose.Schema.ObjectId,
      // required: [true, 'event must have a type'],
    },
    eventCategoryId: {
      type: mongoose.Schema.ObjectId,
      // required: [true, 'event must have a category'],
    },
    eventSubCategoryId: {
      type: mongoose.Schema.ObjectId,
      // required: [true, 'event must have a category'],
    },
    eventGuide: {
      type: [{
        name: String,
        phone: String,
        email: String
      }],
      default: null
    },
    tags: {
      type: [String],
      default: null
    },
    venueLink: {
      type: String,
      default: null
    },
    maxGroupSize: {
      type: Number,
      default: null,
      // required: [false, 'event must have a group size']
    },
    venueTimezone: {
      type: String
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
      set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
    },
    ratingsQuantity: {
      type: Number,
      default: null
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'event must have a description']
    },
    description: {
      type: String,
      trim: true
    },
    imageCover: {
      type: String,
      default: null,
      // required: [true, 'event must have a cover image']
    },
    images: {
      type: [String],
      default: null,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    eventStartDate: {
      type: Date,
      default: null
      // required: [true, "event must have a start date"]
    },
    eventEndDate: {
      type: Date,
      default: null,
      validate: {
        // This only works on CREATE and SAVE!!!
        validator: function(el) {
          return el >= this.eventStartDate;
        },
        message: 'end date must be less than or equal to event start date'
      },
      default: null
      // required: [true, "event must have a end date"]
    },
    status: {
      type: Number,
      default: 1
    },
    organizerId: {
      type: mongoose.Schema.ObjectId,
      ref: Organiser,
      default: null,
    },
    venueLocation: {
      type: {},
      default: null
    },
    venueAddress: {
      type: String,
      default: null
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);


// eventSchema.index({ price: 1 });
// eventSchema.index({ price: 1, ratingsAverage: -1 });
// eventSchema.index({ slug: 1 });
// eventSchema.index({ startLocation: '2dsphere' });

// eventSchema.virtual('durationWeeks').get(function() {
//   return this.duration / 7;
// });

eventSchema.pre('findByIdAndUpdate', function(next) {
  this.options.runValidators = true;
  next();
});

// Virtual populate
// eventSchema.virtual('reviews', {
//   ref: 'Review',
//   foreignField: 'event',
//   localField: '_id'
// });

eventSchema.plugin(refValidator);


// DOCUMENT MIDDLEWARE: runs before .save() and .create()
eventSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// eventSchema.pre('save', async function(next) {
//   const guidesPromises = this.guides.map(async id => await User.findById(id));
//   this.guides = await Promise.all(guidesPromises);
//   next();
// });

// eventSchema.pre('save', function(next) {
//   console.log('Will save document...');
//   next();
// });

eventSchema.post('save', function(doc, next) {
  console.log(doc);
  next();
});

// QUERY MIDDLEWARE
// eventSchema.pre('find', function(next) {
// eventSchema.pre(/^find/, function(next) {
//   this.find({ secretEvent: { $ne: true } });

//   this.start = Date.now();
//   next();
// });

// eventSchema.pre(/^find/, function(next) {
//   this.populate({
//     path: 'guides',
//     select: '-__v -passwordChangedAt'
//   });

//   next();
// });
// eventSchema.post(/^find/, function(docs, next) {
//   console.log(`Query took ${Date.now() - this.start} milliseconds!`);
//   next();
// });

// AGGREGATION MIDDLEWARE
// eventSchema.pre('aggregate', function(next) {
//   this.pipeline().unshift({ $match: { secretEvent: { $ne: true } } });

//   console.log(this.pipeline());
//   next();
// });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;


//draft, publish, cancelled, expired, pending for approval