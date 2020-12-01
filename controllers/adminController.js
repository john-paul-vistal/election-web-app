const { request, response } = require("express");
const jwt = require('jsonwebtoken')
const Admin = require("../models/admin.model");
const Candidate = require("../models/candidate.model");
const Voters = require("../models/voters.model");
const { post } = require("../routes/adminRoute");

const getLogin = (request, response) => {
    try {
        response.render("./admin/login", { error: "" })
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};


const validateToken = (request, response, next) => {
    try {
        const authorizationHeader = request.cookies.authoration

        if (authorizationHeader === null) {
            response.status(401).json({
                message: "Invalid Token"
            })
        }

        jwt.verify(authorizationHeader, process.env.ACCESS_TOKEN, (error, data) => {
            if (error) {
                response.status(401).json({
                    message: "Invalid Token"
                })
            }
            request.user = data
            next()
        })

    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
}


const loginValidation = async(request, response) => {
    try {
        let username = request.body.username;
        let password = request.body.password;

        const admin = await Admin.findOne({ username: username, password: password });
        if (!admin || admin.length === 0) {
            response.render("admin/login", { error: "Incorrect username or password!" })
        } else {
            const user = {
                id: admin._id,
                username: admin.username,
                password: admin.password,
                fullName: admin.firstname + " " + admin.middlename.charAt(0) + ". " + admin.lastname
            }

            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN)
                //Save cookie to client side
            response.cookie('authoration', accessToken, { httpOnly: true });
            //Redirect
            response.redirect('/ewas.covid.edu/admin/dashboard')
        }
    } catch (e) {
        console.log("dfksdfhsdkfsdfskdjfkj ERROR DIRI")
        return response.status(400).json({
            error: e,
        });
    }
}

const getDashboard = async(request, response) => {
    try {
        const adminUser = await Admin.findOne({ _id: request.user.id })
        const adminsCount = await Admin.find()
        const candidatesCount = await Candidate.find()
        const votersCount = await Voters.find()
        response.render("./admin/dashboard", {
            id: request.user.id,
            fullname: request.user.fullName,
            email: adminUser.email,
            position: adminUser.position,
            adminsCount: adminsCount.length,
            candidatesCount: candidatesCount.length,
            votersCount: votersCount.length,
        })

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
    loginValidation,
    validateToken
};