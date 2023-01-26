const express = require("express");
const adminController = require("../controllers/admin.controller");
const jwtService = require("../services/jwt-handling/jwtHandling");
const  router = express.Router();

router.post("/login" , adminController.login);
router.post("/register" , adminController.add)

module.exports = router