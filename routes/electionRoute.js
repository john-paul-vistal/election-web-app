const express = require("express");
const router = express.Router();

const ElectionController = require("../controllers/electionController");

router.get("/", ElectionController.logInPage);

router.post('/', ElectionController.validate)

router.get('/voting_form', ElectionController.electionForm);

router.post('/submit', ElectionController.submit)

module.exports = router;