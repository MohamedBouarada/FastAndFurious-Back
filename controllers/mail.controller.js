
const mailService = require("../services/mail-service/mailService")

class MailController {
     static async sendMail (req,res) {
          console.log(req.body)
        const {emailChef} = req.body ;
        console.log(emailChef);
       const response= await  mailService.main(emailChef) ;
       if(response.success) {
            return res.status(200).json("email sent successfully")
       } else {
            return res.status(500).json("error in sending email")
       }
    }
}

module.exports = MailController