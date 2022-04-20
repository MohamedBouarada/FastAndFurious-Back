const express = require("express");
const adminController = require("../controllers/admin.controller");
const jwtService = require("../services/jwt-handling/jwtHandling");
const  router = express.Router();

router.post("/login" ,jwtService.jwtVerify, adminController.login);
router.post("/register" ,jwtService.jwtVerify, adminController.add)

module.exports = router