const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    middlename: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    barangay: { type: String, required: true },
    municipality: { type: String, required: true },
    province: { type: String, required: true },
    region: { type: String, required: true },
    contactNumber: { type: Number, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
})

module.exports = mongoose.model('Admins', adminSchema);