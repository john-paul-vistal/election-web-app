const express = require("express");
const router = express.Router();

const AdminControllers = require("../controllers/adminController");
const RegistrationControllers = require("../controllers/adminRegistrationController");
const CandidatesControllers = require("../controllers/candidateController");


<<<<<<< HEAD
router.get("/dashboard", AdminControllers.getMainPage);
=======
router.get("/", AdminControllers.getMainPage);
router.get("/student-registration", AdminControllers.getStudentRegistration);
router.get("/candidacy-form", AdminControllers.getCandidacyForm);
>>>>>>> 6824ec3df237f013f8ea969229c6fdbe82c32277


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

router.post('/registerStudent', AdminControllers.addNewStudent);

router.get('/students',AdminControllers.getStudents);

router.put('/updateStudent/:id',AdminControllers.updateStudent);

router.delete('/deleteStudent/:id',AdminControllers.deleteStudent);

module.exports = router;