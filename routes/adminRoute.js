const express = require("express");
const router = express.Router();

const AdminControllers = require("../controllers/adminController");
const RegistrationControllers = require("../controllers/adminRegistrationController");


router.get("/", AdminControllers.getMainPage);


// START ADMINISTRATION ROUTES
router.post("/registration/", RegistrationControllers.addAdmins);

router.get("/administration/", RegistrationControllers.getAllAdmins);

router.get("/administration/:id", RegistrationControllers.getAdminById);

router.put("/administration/:id", RegistrationControllers.modifyAdmin);

router.delete("/delete/:id", RegistrationControllers.deleteAdmin);

//END ADMINISTRATION ROUTES



module.exports = router;