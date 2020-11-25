const Student = require("../models/students.model");
const parseRequestBody = require("../utilities/parseRequestBody");

const getMainPage = (request, response) => {
    try {
        response.render("./admin/dashboard")
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const getStudentRegistration = (request, response) => {
    try {
        response.render("./admin/studentRegistrationForm")
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const getCandidacyForm = (request, response) => {
    try {
        response.render("./admin/candidacyForm")
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

module.exports = {
    getMainPage,
    getStudentRegistration,
    getCandidacyForm
};