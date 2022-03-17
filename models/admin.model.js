const mongoose = require("mongoose");
const {Schema} = mongoose ;

const userSchema =  new Schema ({
    
    email: {type: String, required: true, unique: true},
    password : {type:String , min:8 , max:20 , required:true},
    jwt:{type:String , required:false , default:""}
})

const userModel = mongoose.model('user' , userSchema);
module.exports = userModel ;