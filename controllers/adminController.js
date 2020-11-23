const Student = require("../models/students.model");
const parseRequestBody = require("../utilities/parseRequestBody");

const getMainPage = (request, response) => {
    try {
        response.render("dashboard")
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};


module.exports = {
    getMainPage
};