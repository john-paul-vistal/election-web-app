const Candidate = require("../models/candidate.model");
const parseRequestBody = require("../utilities/parseRequestBody");

const getAllCandidate = async(request, response) => {
    try {
        const candidates = await Candidate.find();
        if (!candidates) {
            return response.status(400).json({
                error: "Error in getting candidates!",
            });
        }

        response.send(candidates)

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

        response.status(200).json({
            candidate: candidate,
        });

    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const addCandidate = async(request, response) => {
    try {

        let newCandidate = new Candidate({
            id: request.body.id,
            firstname: request.body.firstname,
            lastname: request.body.lastname,
            middlename: request.body.middlename,
            position: request.body.position,
            votes: request.body.votes
        });

        const result = await newCandidate.save();

        if (!result) {
            return response.status(400).json({
                error: "Error in adding new Candidate!",
            });
        }

        response.status(200).json({
            message: "New Candidate added!",

        });

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

        response.status(200).json({
            message: "Candidate Updated Successfully",
        });

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

            response.status(200).json({
                message: "Candidate Successfully deleted!",
            });
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
    deleteCandidate
};