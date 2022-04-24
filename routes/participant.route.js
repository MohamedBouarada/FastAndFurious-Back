const express = require("express");
const participantController = require("../controllers/participant.controller");
const jwtService = require("../services/jwt-handling/jwtHandling");
const  router = express.Router();


router.post("/register" , participantController.add)
router.get("/teams/:competition" ,jwtService.jwtVerify, participantController.get)
router.delete("/delete/:id",jwtService.jwtVerify,participantController.delete)
module.exports = router