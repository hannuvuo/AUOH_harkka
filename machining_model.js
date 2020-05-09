const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    Material: {
        type: Number,
        required: true
    },
    cutting_speed: {
        type: Number,
        required: true
    },
    feed_rate: {
        type: Number,
        required: true
    },
    max_strength: {
        type: Number,
        required: true
    },
    feed_rate_density: {
        type: Number,
        required: true
    },
    max_strength_density: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("machining", schema);