// const parseRequestBody = require("../utilities/parseRequestBody");
// const mongoose = require('mongoose')
const Candidates = require('../models/candidate.model');
// mongoose.set('useFindAndModify', false);

const logInPage = (request, response) => {
    try {
        response.render('./voters/login',{
            error:""
        })
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const validate = async (request,response)=>{
    const find = await Candidates.find({id:request.body.id})
    if(find.length==0){
        response.render('./voters/login',{
            error: "Invalid id number! Try again!☺"
        }
        )}else{
            response.redirect('/ewas.covid.edu/voting_form')
        }
    }

const electionForm = async (request, response) => {
    try {
        const president = await  Candidates.find({position: "PRESIDENT"})
        const v_president = await Candidates.find({position: "VICE-PRESIDENT"})
        const auditor = await Candidates.find({position: "AUDITOR"})
        const secretary = await Candidates.find({position: "SECRETARY"})
        const treasurer = await Candidates.find({position: "TREASURER"})
        const peaceOfficer = await Candidates.find({position: "P.I.O"})
        const sevenRep = await Candidates.find({position: "REPRESENTATIVE 7"})
        const eigthRep = await Candidates.find({position: "REPRESENTATIVE 8"})
        const nineRep = await Candidates.find({position: "REPRESENTATIVE 9"})
        const tenRep = await Candidates.find({position: "REPRESENTATIVE 10"})
        const elevenRep = await Candidates.find({position: "REPRESENTATIVE 11"})
        const twelveRep = await Candidates.find({position: "REPRESENTATIVE 12"})

        response.render('./voters/electionForm',{
            presidents: president,
            v_presidents: v_president,
            auditors: auditor,
            secretary: secretary,
            treasurers: treasurer,
            peace_officers: peaceOfficer,
            seven_rep:sevenRep,
            eigth_rep: eigthRep,
            nine_rep: nineRep,
            ten_rep: tenRep,
            eleven_rep: elevenRep,
            twelve_rep: twelveRep
        })
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
}

const submit = (request,response) => {
    try{
        request.body.votes.map((element) =>{
            increment(element)
        });
        response.json({response:"Success!"})
    }catch(e){
        console.log(e)
    }
    
}

let increment = async (id) =>{
    return await Candidates.findOneAndUpdate({id:id},{$inc:{'votes':1}})
}
module.exports = {
    logInPage,
    electionForm,
    submit,
    validate
};