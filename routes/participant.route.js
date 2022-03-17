const express = require("express");
const participantController = require("../controllers/participant.controller");
const  router = express.Router();


router.post("/register" , participantController.add)
router.get("/teams/:competition" , participantController.get)
module.exports = router