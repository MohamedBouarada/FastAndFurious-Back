const adminDao = require("../dao/admin.dao");
const passwordService = require("../services/password-handling/passwordService")
const jwtService = require("../services/jwt-handling/jwtHandling");
const userModel = require("../models/admin.model");

class AdminController {
    static async add(req,res) {
        const {email,password} = req.body ;
        const adminExists = await   adminDao.getAdminByEmail(email);
        if(adminExists.success === false){
            return res.status(500).json("error occurred while registering")
        }
        if(adminExists.data) {
            return res.status(400).send("account already exists with this email")
        }
        const hashedPassword = await  passwordService.encryptingPassword(password) ;
        if(hashedPassword.success===false) {
            return res.status(500).send("error occurred while registering")
        }
        const adminToSave = {
            email,
            password:hashedPassword.data
        }
        const savingResponse = await adminDao.add(adminToSave)
        if(savingResponse.success===false){
            return res.status(500).send("error occurred while registering")
        }
        return res.status(201).send("admin created successfully")
    }

    static async login(req,res){
        const {email,password} = req.body ;
        const adminExists = await   adminDao.getAdminByEmail(email);
        console.log(adminExists);
        if(adminExists.success === false) {
            return res.status(500).json("error occurred while registering")
        }
        if(!adminExists.data){
            return res.status(404).send("please verify your email or create an account")
        }
        const passwordDecryption = await passwordService.decryptingPassword(password,adminExists.data.password);
        if(passwordDecryption.success === false){
            return res.status(500).send("error occurred while logging in , please try again1")
        }
        if(!passwordDecryption.data){
            return res.status(403).send("please verify your password")
        }

        

        const jwtProcess = await jwtService.jwtSign(email);
        if(jwtProcess.success === false) {
            return res.status(500).send("error occurred while logging in , please try again2");
        }
        const adminWithJWT = await adminDao.getAdminByEmailAndUpdateJwt(email,jwtProcess.data)
        if(adminWithJWT.success === false) {
            return res.status(500).send("error occurred while logging in , please try again3")
        }
        return res.status(200).send(jwtProcess.data)
    }
}


module.exports = AdminController ;