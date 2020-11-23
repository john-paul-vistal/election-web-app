const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
    firstname: {type:String, required:true},
    lastname: {type:String, required:true},
    position: {type:String, required:true},
    votes: {type:Number},
    contactNumber: {type:Number, required:true}
})

module.exports = mongoose.model('Candidates',candidateSchema);