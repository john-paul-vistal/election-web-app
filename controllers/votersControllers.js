const Voters = require("../models/voters.model");
const parseRequestBody = require("../utilities/parseRequestBody");

const getAllVoters = async(request, response) => {

    try {
        const voters = await Voters.find();
        if (!voters) {
            return response.status(400).json({
                error: "Error in retrieving voters!",
            });
        }
        response.render("./admin/voters", { voters: voters })
    } catch (e) {
        return response.status(400).json({
            error: e + "",
        });
    }
}



const addNewVoter = async(request, response) => {
    try {
        const id = await Voters.find();
        const lastId = (id.length > 0) ? id[id.length - 1].votersId : 100000;
        console.log(id)
        const votersInfo = new Voters({
            votersId: lastId + 1,
            firstname: request.body.firstname.toUpperCase(),
            lastname: request.body.lastname.toUpperCase(),
            middlename: request.body.middlename.toUpperCase(),
            barangay: request.body.barangay.toUpperCase(),
            municipality: request.body.municipality.toUpperCase(),
            province: request.body.province.toUpperCase(),
            region: request.body.region,
            birthdate: request.body.birthdate,
            gender: request.body.gender,
            contact: request.body.contact,
            email: request.body.email
        })
        const result = await votersInfo.save();
        if (!result) {
            return response.status(400).json({
                error: "Error in adding new voters!"
            })
        }
        response.redirect('/ewas.covid.edu/admin/voters')
    } catch (e) {
        return response.status(400).json({
            error: e + ""
        })
    }
}

const deleteVoter = async(request, response) => {
    try {
        await Voters.deleteOne({ _id: request.params.id }, (error, result) => {
            if (error) {
                return response.status(400).json({
                    error: error,
                });
            }

            response.redirect('/ewas.covid.edu/admin/voters')
        });
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
}

const updateVoter = async(request, response) => {
    const updates = parseRequestBody(request.body);
    try {
        const result = await Voters.updateOne({ _id: request.params.id }, { $set: updates });

        if (!result) {
            return response.status(400).json({
                error: "Error in updating voters information!",
            });
        }

        response.status(200).json({
            result: result,
        });
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

module.exports = {
    getAllVoters,
    addNewVoter,
    deleteVoter,
    updateVoter
};