const mongoose = require('mongoose');

const eventTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        // unique: true,
        required: [true, 'please enter the event category name']
    },
    slug: {
        type: String,
        unique: true,
        require: [true, 'please enter the slug']
    },
    status: {
        type: Boolean,
        default: true
    },
    
});


const EventType = mongoose.model('EventTypes', eventTypeSchema);

module.exports = EventType;