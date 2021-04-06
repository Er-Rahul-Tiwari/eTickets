const mongoose = require('mongoose');
const validator = require('validator');

const leadSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Booking must belong to a User!']
    },        
    budget:{
        type: [String],
        default: null
    },
    venue: {
        type: String,
        default: null
    },
    room: {
        type: Number,
        default: null
    },
    functionStartDate:{
        type: Date,
        default: null
    },
    functionEndDate:{
        type: Date,
        default: null
    },
    membersMenu:{
        type: Number,
        default: null
    },
    venueImage:{
        type: String,
        default: null
    },
    leadPersonPhone:{
        type: String,
        default: null
    },
    leadPersonEmail:{
        type: String,
        default: null,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    religionsOfParty:{
        type: String,
        default: null
    },
    bridegroom:{
        type: String,
        default: null
    }
});

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;