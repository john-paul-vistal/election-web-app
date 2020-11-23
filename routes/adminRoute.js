const express = require("express");
const router = express.Router();

const AdminControllers = require("../controllers/adminController");

router.get("/", AdminControllers.getMainPage);



module.exports = router;