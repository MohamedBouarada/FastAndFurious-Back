const express = require("express");
const adminController = require("../controllers/admin.controller");
const  router = express.Router();

router.post("/login" , adminController.login);
router.post("/register" , adminController.add)

module.exports = router