const express = require("express");
const router = express.Router();

const VotersControllers = require("../controllers/voterController");

router.get("/", VotersControllers.logInPage);

router.post('/voting_form', VotersControllers.electionForm);


module.exports = router;