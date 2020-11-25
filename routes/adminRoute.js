const express = require("express");
const router = express.Router();

const AdminControllers = require("../controllers/adminController");

router.get("/", AdminControllers.getMainPage);
router.get("/student-registration", AdminControllers.getStudentRegistration);
router.get("/candidacy-form", AdminControllers.getCandidacyForm);



module.exports = router;