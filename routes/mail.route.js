const express = require("express");
const MailController = require("../controllers/mail.controller");
const  router = express.Router();

router.post("/send" ,MailController.sendMail )

module.exports = router