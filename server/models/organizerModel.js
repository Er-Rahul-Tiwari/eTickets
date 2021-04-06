const mongoose = require('mongoose'); 
const refValidator = require('mongoose-referrence-validator');

const organiserSchema = new mongoose.Schema(
  {
    managerId:{
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Organiser must belong to a Manager']
    },
    name:{
      type:String,
      required: [true, 'Organiser must have a name']
    },
    website:{
      type:String
    },
    profileImage:{
      type:String
    },
    description:{
      type:String
    },
    socialLinks:{
      type:Object
    },
    status:{
      type:Boolean,
      default:true
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
  },{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

organiserSchema.plugin(refValidator);
const Organiser = mongoose.model('Organiser', organiserSchema);
module.exports = Organiser;
