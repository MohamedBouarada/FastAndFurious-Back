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
                    text : "Cher participant, Félicitation pour votre inscription! La famille de Fast&Furious est ravie de vous avoir.C'est un pas en avant pour être parmis les compétiteurs dans nos challenges. Il ne vous reste que quelques tâches à accomplir: contacter le responsable du challenge pour payer les frais de l'inscription ET préparer vos robots et vos cerveaux pour une édition extraodinaire de Fast&Furious.Apportez vos compétences et votre bonne humeur, et préparer vous à avoir une ambiance à la fois compétitive et chaleureuse! Cordialement, Mariem SOULA, vice-présidente administrative."
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
