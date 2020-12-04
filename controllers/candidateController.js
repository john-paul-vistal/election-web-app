const Candidate = require("../models/candidate.model");
const Admin = require("../models/admin.model");
const Voters = require("../models/voters.model");
const parseRequestBody = require("../utilities/parseRequestBody");

const getAllCandidate = async(request, response) => {
    try {
        const adminUser = await Admin.findOne({ _id: request.user.id })
        const candidates = await Candidate.find();
        if (!candidates) {
            return response.status(400).json({
                error: "Error in getting candidates!",
            });
        }

        response.render("./admin/candidates", {
            candidates: candidates,
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
const retrieveAllCandidate = async(request, response) => {
    try {
        const candidates = await Candidate.find();
        if (!candidates) {
            return response.status(400).json({
                error: "Error in getting candidates!",
            });
        }

        response.status(200).json(candidates)

    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};


const getCandidateById = async(request, response) => {
    try {
        const candidate = await Candidate.find({ _id: request.params.id });

        if (!candidate || candidate.length === 0) {
            return response.status(400).json({
                error: "Candidate not found!",
            });
        }

        response.render("admin/candidateFormUpdate", { candidate: candidate })

    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const addCandidate = async(request, response) => {

    try {
        const registeredVoter = await Voters.findOne({ votersId: request.body.id })
        const alreadyCandidate = await Candidate.findOne({ id: request.body.id })
        if (registeredVoter != null && alreadyCandidate == null) {
            let newCandidate = new Candidate({
                id: request.body.id,
                firstname: request.body.firstname.toUpperCase(),
                lastname: request.body.lastname.toUpperCase(),
                middlename: request.body.middlename.toUpperCase(),
                position: request.body.position.toUpperCase(),
            });

            const result = await newCandidate.save();

            if (!result) {
                return response.status(400).json({
                    error: "Error in adding new Candidate!",
                });
            }

            response.redirect("/ewas.covid.edu/admin/candidates")
        } else if (alreadyCandidate != null) {
            response.redirect("/ewas.covid.edu/admin/candidate-registration-form?error=You are already a candidate!")
        } else {
            response.redirect("/ewas.covid.edu/admin/candidate-registration-form?error=Invalid ID number")
        }
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
}

const modifyCandidate = async(request, response) => {
    try {
        const updates = parseRequestBody(request.body);
        const result = await Candidate.updateOne({ _id: request.params.id }, { $set: updates });
        if (!result) {
            return response.status(400).json({
                error: "Error in updating candidate!",
            });
        }

        response.redirect("/ewas.covid.edu/admin/candidates")

    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
}

const deleteCandidate = async(request, response) => {
    try {
        await Candidate.deleteOne({ _id: request.params.id }, (error, result) => {
            if (error) {
                return response.status(400).json({
                    error: error,
                });
            }

            response.redirect("/ewas.covid.edu/admin/candidates")
        });
    } catch (e) {
        return response.status(400).json({
            error: e,
        });

    }
}


module.exports = {
    getAllCandidate,
    addCandidate,
    getCandidateById,
    modifyCandidate,
    deleteCandidate,
    retrieveAllCandidate,

};