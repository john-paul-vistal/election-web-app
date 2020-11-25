const Students = require("../models/students.model");
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


const addNewStudent = async (request, response) => {
      
    try {
        const id = await Students.find();
        const lastId = (id.length>0)? id[id.length-1].studentId:100000;
        const studentInfo = new Students({
            studentId: lastId+1,
            firstname: request.body.firstname,
            lastname: request.body.lastname,
            middlename: request.body.middlename,
            baranggay: request.body.baranggay,
            municipal: request.body.municipal,
            province: request.body.province,
            region: request.body.region,
            birthdate: request.body.birthdate,
            gender: request.body.gender,
            contact: request.body.contact,
            email: request.body.email
        })
        const result = await studentInfo.save();
        if (!result) {
            return response.status(400).json({
                error: "Error in adding new student!"
            })
        }
        response.status(200).json({
            message: "Successfully added!"
        })
    } catch (e) {
        return response.status(400).json({
            error: e+""
        })
    }
}

const getStudents = async (request,response) => {
    
    try {
        const students = await Students.find();
        // console.log(students[students.length-1]._id)
        if (!students) {
          return response.status(400).json({
            error: "Error in retrieving students!",
          });
        }
    
        response.status(200).json({
         students: students,
        });
      } catch (e) {
        return response.status(400).json({
          error: e+"",
        });
      }
}

const deleteStudent = async (request,response)=>{
    try {
        await Students.deleteOne({ _id: request.params.id }, (error, result) => {
          if (error) {
            return response.status(400).json({
              error: error,
            });
          }
    
          response.status(200).json({
            message: "Successfully deleted book",
            result: result,
          });
        });
      } catch (e) {
        return response.status(400).json({
          error: e,
        });
      }
}

const updateStudent = async (request, response) => {
    const updates = parseRequestBody(request.body);
    try {
      const result = await Students.updateOne(
        { _id: request.params.id },
        { $set: updates }
      );
  
      if (!result) {
        return response.status(400).json({
          error: "Error in updating student information!",
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
    getMainPage,
    getStudents,
    addNewStudent,
    deleteStudent,
    updateStudent
};