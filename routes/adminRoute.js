const express = require("express");
const router = express.Router();

const AdminControllers = require("../controllers/adminController");
const RegistrationControllers = require("../controllers/adminRegistrationController");
const CandidatesControllers = require("../controllers/candidateController");
const VotersControllers = require("../controllers/votersControllers");


router.get("/", AdminControllers.getLogin);
router.post("/login", AdminControllers.loginValidation);
router.get("/dashboard", AdminControllers.validateToken, AdminControllers.getDashboard);
router.get("/admin-registration-form", AdminControllers.getAdminRegistration);
router.get("/voters-registration-form", AdminControllers.getStudentRegistration);
router.get("/candidate-registration-form", AdminControllers.getCandidacyForm);


// START ADMINISTRATION ROUTES
router.post("/administration/registration", RegistrationControllers.addAdmins);
router.get("/administration", AdminControllers.validateToken, RegistrationControllers.getAllAdmins);
router.get("/administration/:id", RegistrationControllers.getAdminById);
router.post("/administration/:id", RegistrationControllers.modifyAdmin);
router.get("/administration/delete/:id", RegistrationControllers.deleteAdmin);
//END ADMINISTRATION ROUTES

//START CANDIDATE ROUTES
router.post("/candidate/registration", CandidatesControllers.addCandidate)
router.get("/candidates", AdminControllers.validateToken, CandidatesControllers.getAllCandidate)
router.get("/candidate/:id", CandidatesControllers.getCandidateById)
router.post("/candidate/:id", CandidatesControllers.modifyCandidate)
router.get("/candidate/delete/:id", CandidatesControllers.deleteCandidate)
    //END CANDIDATE ROUTES

//START VOTER ROUTES
router.post('/voter/registration', VotersControllers.addNewVoter);
router.get('/voters', AdminControllers.validateToken, VotersControllers.getAllVoters);
router.get('/voter/:id', VotersControllers.getVoterById);
router.post('/voter/:id', VotersControllers.updateVoter);
router.get('/voter/delete/:id', VotersControllers.deleteVoter);
//END VOTER ROUTES

module.exports = router;