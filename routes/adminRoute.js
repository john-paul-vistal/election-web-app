const express = require("express");
const router = express.Router();

const AdminControllers = require("../controllers/adminController");
const RegistrationControllers = require("../controllers/adminRegistrationController");
const CandidatesControllers = require("../controllers/candidateController");
const VotersControllers = require("../controllers/votersControllers");


router.get("/", AdminControllers.getLogin);
router.get("/dashboard", AdminControllers.getDashboard);
router.get("/admin-registration-form", AdminControllers.getAdminRegistration);
router.get("/voters-registration-form", AdminControllers.getStudentRegistration);
router.get("/candidate-registration-form", AdminControllers.getCandidacyForm);


// START ADMINISTRATION ROUTES
router.post("/administration/registration", RegistrationControllers.addAdmins);
router.get("/administration", RegistrationControllers.getAllAdmins);
router.get("/administration/:id", RegistrationControllers.getAdminById);
router.put("/administration/:id", RegistrationControllers.modifyAdmin);
router.get("/administration/delete/:id", RegistrationControllers.deleteAdmin);
//END ADMINISTRATION ROUTES

//START CANDIDATE ROUTES
router.post("/candidate/registration", CandidatesControllers.addCandidate)
router.get("/candidates", CandidatesControllers.getAllCandidate)
router.get("/candidate/:id", CandidatesControllers.getCandidateById)
router.put("/candidate/:id", CandidatesControllers.modifyCandidate)
router.get("/candidate/delete/:id", CandidatesControllers.deleteCandidate)
    //END CANDIDATE ROUTES

//START STUDENT ROUTES
router.post('/voter/registration', VotersControllers.addNewVoter);
router.get('/voters', VotersControllers.getAllVoters);
router.put('/voter/:id', VotersControllers.updateVoter);
router.get('/voter/delete/:id', VotersControllers.deleteVoter);
//END STUDENT ROUTES

module.exports = router;