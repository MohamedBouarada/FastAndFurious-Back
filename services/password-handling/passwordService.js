

const bcrypt = require("bcrypt")

const saltRounds = 10 ;

class PasswordService {
    static async encryptingPassword (plainTextPassword) {
        try{
            const hashedPassword = await bcrypt.hash(plainTextPassword ,saltRounds) ;
            return {success:true , data :hashedPassword} ;
        }catch (e) {
            console.log(e) ;
            return {success:false , data:null}
        }
    }

    static async decryptingPassword ( plainTextPassword, hashedPassword) {
        try{
            const result = await  bcrypt.compare(plainTextPassword, hashedPassword)
            return {success:true , data :result}
        }catch (e) {
            console.log(e)
            return {success :false , data:null}
        }
    }
}


module.exports = PasswordService