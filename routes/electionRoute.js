const express = require("express");
const router = express.Router();

const ElectionController = require("../controllers/electionController");

router.get("/", ElectionController.logInPage);

router.post('/voting_form', ElectionController.electionForm);


module.exports = router;