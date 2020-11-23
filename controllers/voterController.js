const Student = require("../models/students.model");
const parseRequestBody = require("../utilities/parseRequestBody");

const getMainPage = (request, response) => {
    try {
        response.send("Welcome to EWAS(Election Web Application System)")
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};


module.exports = {
    getMainPage
};