const mongoose = require('mongoose')
const Candidates = require('../models/candidate.model');
const PersonVoted = require('../models/votes.model')
const Voters = require('../models/voters.model')
mongoose.set('useFindAndModify', false);

const logInPage = (request, response) => {
    try {
        response.render('./voters/login', {
            error: ""
        })
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};
var voters_id;
const validate = async(request, response) => {
    const find = await Voters.find({ votersId: request.body.id })
    const check_voted = await PersonVoted.find({ votersId: request.body.id })
    if (find.length == 0) {
        response.render('./voters/login', {
            error: "Invalid ID number! Try again!"
        })
    } else if (check_voted.length != 0) {
        response.render('./voters/login', {
            error: "You Already Voted!"
        })
    } else {
        voters_id = request.body.id
        response.redirect('/ewas.covid.edu/voting_form')
    }
}

const electionForm = async(request, response) => {
    const voter = await Voters.find({ votersId: voters_id })
    try {
        const president = await Candidates.find({ position: "PRESIDENT" })
        const v_president = await Candidates.find({ position: "VICE-PRESIDENT" })
        const auditor = await Candidates.find({ position: "AUDITOR" })
        const secretary = await Candidates.find({ position: "SECRETARY" })
        const treasurer = await Candidates.find({ position: "TREASURER" })
        const publicInformation = await Candidates.find({ position: "P.I.O" })
        const peaceOfficer = await Candidates.find({ position: "P.O.O" })
        const sevenRep = await Candidates.find({ position: "REPRESENTATIVE 7" })
        const eigthRep = await Candidates.find({ position: "REPRESENTATIVE 8" })
        const nineRep = await Candidates.find({ position: "REPRESENTATIVE 9" })
        const tenRep = await Candidates.find({ position: "REPRESENTATIVE 10" })
        const elevenRep = await Candidates.find({ position: "REPRESENTATIVE 11" })
        const twelveRep = await Candidates.find({ position: "REPRESENTATIVE 12" })

        response.render('./voters/electionForm', {
            presidents: president,
            v_presidents: v_president,
            auditors: auditor,
            secretary: secretary,
            treasurers: treasurer,
            publicInformation: publicInformation,
            peace_officers: peaceOfficer,
            seven_rep: sevenRep,
            eigth_rep: eigthRep,
            nine_rep: nineRep,
            ten_rep: tenRep,
            eleven_rep: elevenRep,
            twelve_rep: twelveRep,
            grade: voter[0].gradelevel
        })
    } catch (e) {
        response.redirect('/ewas.covid.edu')
    }
}

const submit = (request, response) => {
    try {
        request.body.votes.map((element) => {
            increment(element)
        });
        direct(voters_id, request.body.votes)
        response.json({ response: "Success!" })
    } catch (e) {
        console.log(e)
    }

}

let direct = async(id, vote_list) => {
    try {
        let person_votes = new PersonVoted({
            votersId: id,
            vote: vote_list
        })
        const result = await person_votes.save();
        if (!result) {
            return response.status(400).json({
                error: "Failed to save voter!",
            });
        }
    } catch (e) {
        console.log(e)
    }
}

let increment = async(id) => {
    return await Candidates.findOneAndUpdate({ id: id }, { $inc: { 'votes': 1 } })
}
module.exports = {
    logInPage,
    electionForm,
    submit,
    validate
};