const nodemailer = require("nodemailer");

class MailService{
    async  main ( participantMail) {
        try {
            console.log('1')    
            
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port:465,
                auth :{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASSWORD,
                }
            }) ;
            console.log('2')    
            const info = await transporter.sendMail({
                    from : "auto club",
                    to: participantMail,
                    subject : "inscription fast",
                    text : "enregistrement done"
                }

            )
            console.log('3') 
            console.log(info);
            return {success : true}
        }catch (e) {
            console.log(e)
            return {success:false}
        }

    }
}



module.exports = new MailService()
