const mongoose = require('mongoose');

const archiveSchema = mongoose.Schema({
    adminId: { type: Object, required: true },
    candidates: { type: Array, required: true, default: [] },
    votes: { type: Array, required: true, default: [] },
    recordedDate: { type: Date, required: true, default: Date.now() }
})

module.exports = mongoose.model('Archives', archiveSchema, 'archives');