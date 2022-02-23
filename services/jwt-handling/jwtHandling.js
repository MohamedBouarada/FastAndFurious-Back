const jwt = require("jsonwebtoken");


class JwtHandling {

    static async jwtSign (email,id){
        try {
            const result = await jwt.sign({"email":email , "id":id  } ,process.env.JWT_SECRET)
            return {success:true , data:result}
        }catch (e){
            return {success:false ,data:null}
        }

    }

    static async jwtVerify (req,res,next) {
        const token = req.headers.token;

        if(token) {
            try {
                const {email,id} = await jwt.verify(token , process.env.JWT_SECRET) ;
                req.infos= {"authEmail":email,"authId":id} ;
                next();
            }catch (err) {
                res.status(400).send(err)
            }
        } else {
            res.status(401).send("you are not authorized");
        }
    }
}


module.exports =  JwtHandling;