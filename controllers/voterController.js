const Student = require("../models/students.model");
const parseRequestBody = require("../utilities/parseRequestBody");

const logInPage = (request, response) => {
    try {
        response.render('./voters/login')
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const electionForm = (request,response) => {
    try{
        response.render('./voters/electionForm')
    }catch(e){
        return response.status(400).json({
            error: e,
        });
    }
}
module.exports = {
    logInPage,
    electionForm
};