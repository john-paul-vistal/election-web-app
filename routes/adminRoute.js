const express = require("express");
const router = express.Router();

const AdminControllers = require("../controllers/adminController");
const RegistrationControllers = require("../controllers/adminRegistrationController");
const CandidatesControllers = require("../controllers/candidateController");


router.get("/dashboard", AdminControllers.getMainPage);
<<<<<<< HEAD
router.get("/", AdminControllers.getMainPage);
=======
>>>>>>> 8b0e0a6107a97b7374867edc009c4f93bf1f398d
router.get("/student-registration", AdminControllers.getStudentRegistration);
router.get("/candidacy-form", AdminControllers.getCandidacyForm);


// START ADMINISTRATION ROUTES
router.post("/administration/registration/", RegistrationControllers.addAdmins);
router.get("/administration/", RegistrationControllers.getAllAdmins);
router.get("/administration/:id", RegistrationControllers.getAdminById);
router.put("/administration/:id", RegistrationControllers.modifyAdmin);
router.delete("/administration/delete/:id", RegistrationControllers.deleteAdmin);
//END ADMINISTRATION ROUTES

//START CANDIDATE ROUTES
router.post("/candidate/registration", CandidatesControllers.addCandidate)
router.get("/candidate/", CandidatesControllers.getAllCandidate)
router.get("/candidate/:id", CandidatesControllers.getCandidateById)
router.put("/candidate/:id", CandidatesControllers.modifyCandidate)
router.delete("/candidate/delete/:id", CandidatesControllers.deleteCandidate)
    //END CANDIDATE ROUTES

//START STUDENT ROUTES
router.post('/registerStudent', AdminControllers.addNewStudent);
router.get('/students', AdminControllers.getStudents);
router.put('/updateStudent/:id', AdminControllers.updateStudent);
router.delete('/deleteStudent/:id', AdminControllers.deleteStudent);
//END STUDENT ROUTES

module.exports = router;