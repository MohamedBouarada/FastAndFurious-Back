
const mailService = require("../services/mail-service/mailService")

class MailController {
     static async sendMail (req,res) {
        const {participantEmail} = req.body ;
        console.log(participantEmail);
       const response= await  mailService.main(participantEmail) ;
       if(response.success) {
            return res.status(200).json("email sent successfully")
       } else {
            return res.status(500).json("error in sending email")
       }
    }
}

module.exports = MailController