const mongoose = require('mongoose');

const votersSchema = mongoose.Schema({
    votersId: { type: Number, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    middlename: { type: String, required: true },
    barangay: { type: String, required: true },
    municipality: { type: String, required: true },
    province: { type: String, required: true },
    region: { type: String, required: true },
    birthdate: { type: Date, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    contact: { type: Number, required: true },
    email: { type: String, required: true },
    gradelevel: { type: Number, required: true }
})

module.exports = mongoose.model('Voters', votersSchema, 'voters');