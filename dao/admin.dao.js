const adminModel = require("../models/admin.model")

class AdminDao {
    static async add(admin) {
        const adminToSave = new adminModel(admin);
        try{
            const result = await adminToSave.save();
             return {success: true , data : result}
        }catch (e) {
            console.log(e)
            return {success: false , data : null}
        }
    }
    static async getAdminByEmail(email) {
        try {
            console.log(email);
            const result = await adminModel.findOne({"email": email}).exec();

            return {"success": true, data: result}
        } catch (e) {
            console.log("error when searching a user by email" + e);
            return {success: false, data: null}
        }
    }

    static async getAdminByEmailAndUpdateJwt (email , jwt) {
        try {

            await adminModel.findOneAndUpdate({"email" : email} , {"jwt":jwt} , {new:true}  );
            return {success: true};
        }catch (error) {
            console.log(error);
            return {success:false};
        }
    }
}


module.exports = AdminDao ;