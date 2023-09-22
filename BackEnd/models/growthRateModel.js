const mongoose = require('mongoose')
const Schema = mongoose.Schema

const growthRateSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    previous: {
        type: Number,
        required: true
    },
    current: {
        type: Number,
        required: true
    },
    next: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('growthrate', growthRateSchema)