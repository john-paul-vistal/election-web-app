const express = require("express");
const router = express.Router();

const VotersControllers = require("../controllers/voterController");

router.get("/", VotersControllers.getMainPage);



module.exports = router;