const express = require("express");
const router = express.Router();

const ElectionController = require("../controllers/electionController");

router.get("/", ElectionController.logInPage);

router.post('/', ElectionController.validate, ElectionController.validateToken)

router.get('/voting_form', ElectionController.electionForm);

router.post('/submit', ElectionController.submit)

router.get('/vote-submitted', ElectionController.finishVoting)

module.exports = router;