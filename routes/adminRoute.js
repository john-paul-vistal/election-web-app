const express = require("express");
const router = express.Router();

const AdminControllers = require("../controllers/adminController");

router.get("/", AdminControllers.getMainPage);

router.post('/registerStudent', AdminControllers.addNewStudent);

router.get('/students',AdminControllers.getStudents);

router.put('/updateStudent/:id',AdminControllers.updateStudent);

router.delete('/deleteStudent/:id',AdminControllers.deleteStudent);

module.exports = router;