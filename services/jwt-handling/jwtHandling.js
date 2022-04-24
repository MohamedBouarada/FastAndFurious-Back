const jwt = require("jsonwebtoken");


class JwtHandling {

    static async jwtSign (email){
        try {
            const result = await jwt.sign({"email":email } ,process.env.JWT_SECRET)
            return {success:true , data:result}
        }catch (e){
            return {success:false ,data:null}
        }

    }

    static async jwtVerify (req,res,next) {
        const token = req.headers.authorization;
        if(!token) {
            return res.status(403).json("undefined Bearer Authorization Header")
        }
        if(token) {
            try {
                console.log(token);
                const {email} = await jwt.verify(token , process.env.JWT_SECRET) ;
                req.infos= {"authEmail":email} ;
                next();
            }catch (err) {
               return res.status(400).send(err)
            }
        } else {
           return res.status(401).send("you are not authorized");
        }
    }
}


module.exports =  JwtHandling;