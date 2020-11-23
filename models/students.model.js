const mongoose = require('mongoose');

const studentsSchema = mongoose.Schema({
    firstname: {type:String, required:true},
    lastname: {type:String, required:true},
    age:{type:Number, required:true},
    contactNumber: {type:Number, required:true}
})

module.exports = mongoose.model('Student',studentsSchema);