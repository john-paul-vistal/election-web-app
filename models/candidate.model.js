const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
    id: { type: Number, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    middlename: { type: String, required: true },
    position: { type: String, required: true },
    votes: { type: Number, required: true, default: 0 }
})

module.exports = mongoose.model('Candidates', candidateSchema);