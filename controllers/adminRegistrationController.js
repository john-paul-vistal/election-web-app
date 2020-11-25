const Admin = require("../models/admin.model");
const parseRequestBody = require("../utilities/parseRequestBody");

const getAllAdmins = async(request, response) => {
    try {
        const admins = await Admin.find();
        if (!admins) {
            return response.status(400).json({
                error: "Error in getting admins!",
            });
        }

        response.status(200).json({
            admins: admins,
        });

    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const getAdminById = async(request, response) => {
    try {
        const admin = await Admin.find({ _id: request.params.id });

        if (!admin || admin.length === 0) {
            return response.status(400).json({
                error: "Admin not found!",
            });
        }

        response.status(200).json({
            admin: admin,
        });

    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const addAdmins = async(request, response) => {
    try {

        let newAdmin = new Admin({
            firstname: request.body.firstname,
            lastname: request.body.lastname,
            email: request.body.email,
            age: request.body.age,
            contactNumber: request.body.contactNumber,
            username: request.body.username,
            password: request.body.password,
        });

        const result = await newAdmin.save();

        if (!result) {
            return response.status(400).json({
                error: "Error in adding new Admin!",
            });
        }

        response.status(200).json({
            message: "New Admin added!",
        });

    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
}

const modifyAdmin = async(request, response) => {
    try {
        const updates = parseRequestBody(request.body);
        const result = await Admin.updateOne({ _id: request.params.id }, { $set: updates });
        if (!result) {
            return response.status(400).json({
                error: "Error in updating admin!",
            });
        }

        response.status(200).json({
            message: "Admin Updated Successfully",
        });

    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
}

const deleteAdmin = async(request, response) => {
    try {
        await Admin.deleteOne({ _id: request.params.id }, (error, result) => {
            if (error) {
                return response.status(400).json({
                    error: error,
                });
            }

            response.status(200).json({
                message: "Admin Successfully deleted!",
            });
        });
    } catch (e) {
        return response.status(400).json({
            error: e,
        });

    }
}


module.exports = {
    getAllAdmins,
    getAdminById,
    addAdmins,
    modifyAdmin,
    deleteAdmin
};