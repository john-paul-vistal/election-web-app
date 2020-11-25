const mongoose = require('mongoose');

const studentsSchema = mongoose.Schema({
    studentId: {type: Number, required: true},
    firstname: {type:String, required:true},
    lastname: {type:String, required:true},
    middlename: {type:String, required: true},
    baranggay: {type: String, required: true},
    municipal: {type: String, required: true},
    province: {type: String, required: true},
    region: {type: String, required: true},
    birthdate: {type: Date, required: true},
    gender: {type: String, required: true},
    contact: {type: Number, required: true},
    email: {type: String, required: true}
})

module.exports = mongoose.model('Student',studentsSchema,'students');