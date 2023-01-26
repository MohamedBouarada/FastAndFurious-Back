const mongoose = require("mongoose");
const {Schema} = mongoose ;

const participantSchema =  new Schema ({
    competition: {type: String, required:true},
    nomEquipe: {type: String, required:true, unique:true},
    etablissement: {type: String, required:true},
    nomPrenomChef:{type: String, required:true},
    mailChef:{type: String, required:true},
    telChef:{type: String, required:true},
    membre1:{type: String, required:true},
    membre2:{type: String, required:true},
    membre3:{type: String, required:true},
    membre4:{type: String, required:false}
})

const participantModel = mongoose.model('equipe' , participantSchema);
module.exports = participantModel ;