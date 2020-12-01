const mongoose = require('mongoose');

const votesSchema = mongoose.Schema({
    votersId: { type: Number, required: true },
    vote: { type: Array, required: true, default: [] },
    dateVoted: { type: Date, required: true, default: Date.now() }
})

module.exports = mongoose.model('Votes', votesSchema, 'votes');