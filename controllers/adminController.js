const { request } = require("express");
const Admin = require("../models/admin.model");

const getLogin = (request, response) => {
    try {
        response.render("./admin/login")
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const loginValidation = async(request, response) => {
    const admins = await Admin.find();
    admins.forEach(admin => {
        if (request.body.username == admin.username && request.body.password == admin.password) {
            response.redirect("/dashboard")
        }
    })
    response.redirect("/")
}

const getDashboard = (request, response) => {
    try {
        response.render("./admin/dashboard")
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const getAdminRegistration = (request, response) => {
    try {
        response.render("./admin/adminForm")
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const getStudentRegistration = (request, response) => {
    try {
        response.render("./admin/votersForm")
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const getCandidacyForm = (request, response) => {
    try {
        response.render("./admin/candidateForm")
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};


module.exports = {
    getAdminRegistration,
    getDashboard,
    getStudentRegistration,
    getCandidacyForm,
    getLogin,
    loginValidation
};