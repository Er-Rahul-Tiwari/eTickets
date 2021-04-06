const mongoose = require('mongoose');

const eventCatSchema = new mongoose.Schema({
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
    }
    
});


const eventCat = mongoose.model('EventCategory', eventCatSchema);

module.exports = eventCat;