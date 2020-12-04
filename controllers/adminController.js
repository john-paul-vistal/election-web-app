const { request, response } = require("express");
const parseRequestBody = require("../utilities/parseRequestBody");
const jwt = require('jsonwebtoken')
const Admin = require("../models/admin.model");
const Candidate = require("../models/candidate.model");
const Voters = require("../models/voters.model");
const Votes = require("../models/votes.model");
const Archives = require("../models/archives.model");
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
            response.status(401).redirect("/ewas.covid.edu/admin")
        } else {
            jwt.verify(authorizationHeader, process.env.ACCESS_TOKEN, (error, data) => {
                if (error) {
                    response.status(401).redirect("/ewas.covid.edu/admin")
                } else {
                    request.user = data
                    next()
                }
            })

        }
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
        return response.status(400).json({
            error: e,
        });
    }
}

const getDashboard = async(request, response) => {
    try {
        const adminUser = await Admin.findOne({ _id: request.user.id })
        response.render("./admin/dashboard", {
            id: request.user.id,
            fullname: request.user.fullName,
            email: adminUser.email,
            position: adminUser.position
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
        response.render("./admin/candidateForm", { error: request.query.error })
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const getProfile = async(request, response) => {
    try {
        const admin = await Admin.findOne({ _id: request.params.id })
        response.render("./admin/viewProfile", {
            admin: admin
        })
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const updateProfile = async(request, response) => {
    try {
        const updates = parseRequestBody(request.body);
        const result = await Admin.updateOne({ _id: request.params.id }, { $set: updates });
        if (!result) {
            return response.status(400).json({
                error: "Error in updating admin!",
            });
        }
        response.clearCookie('authoration')
        response.redirect("/ewas.covid.edu/admin")

    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
}

const logout = (request, response) => {
    try {
        response.clearCookie('authoration')
        response.redirect("/ewas.covid.edu/admin")
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
}

const getCountData = async(request, response) => {
    try {
        const adminsCount = await Admin.find()
        const candidatesCount = await Candidate.find()
        const votersCount = await Voters.find()
        const votesCount = await Votes.find()

        response.status(200).json({
            adminsCount: adminsCount.length,
            candidatesCount: candidatesCount.length,
            votersCount: votersCount.length,
            votesCount: votesCount.length
        })
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
}

const retrieveVotes = async(request, response) => {
    try {
        const votes = await Votes.find();
        const voters = await Voters.find();
        if (!votes) {
            return response.status(400).json({
                error: "Error in getting votes!",
            });
        }
        response.status(200).json({ votes: votes, voters: voters })
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
}

const retieveUnvoted = async(request, response) => {
    try {
        const votes = await Votes.find();
        const voters = await Voters.find();
        if (!votes || !voters) {
            return response.status(400).json({
                error: "Error in getting votes!",
            });
        }
        let count = 0
        var listVoters = []
        voters.forEach((voter) => {
            votes.forEach((vote) => {
                if (voter.votersId == vote.votersId) {
                    count += 1
                }
            })
            if (count == 0) {
                listVoters.push(voter)
            }
            count = 0
        })
        response.status(200).json(listVoters)
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
}


const moveToArchive = async(request, response) => {
    try {
        const candidates = await Candidate.find()
        const votes = await Votes.find()
        let archiveData = new Archives({
            adminId: request.params.id,
            candidates: candidates,
            votes: votes
        })

        const result = await archiveData.save();

        if (!result) {
            return response.status(400).json({
                error: "Error in adding new Archive!",
            });
        }

        await Candidate.deleteMany({})
        await Votes.deleteMany({})

        response.redirect('/ewas.covid.edu/admin/dashboard')

    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
}

module.exports = {
    getAdminRegistration,
    getDashboard,
    getStudentRegistration,
    getCandidacyForm,
    getLogin,
    loginValidation,
    validateToken,
    getProfile,
    updateProfile,
    logout,
    getCountData,
    retrieveVotes,
    retieveUnvoted,
    moveToArchive
};