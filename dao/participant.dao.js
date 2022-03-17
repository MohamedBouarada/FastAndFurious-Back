const participantModel = require("../models/participant.model")

class ParticipantDao {
    static async add(participant) {
        const participantToSave = new participantModel(participant);
        try{
            const result = await participantToSave.save();
             return {success: true , data : result}
        }catch (e) {
            console.log(e)
            return {success: false , data : null}
        }
    }
    static async getteamByName(competition,nomEquipe,etablissement,nomPrenomChef,mailChef) {
        try {
            const result = await participantModel.findOne({"competition":competition,"nomEquipe":nomEquipe,"etablissement":etablissement,"nomPrenomChef":nomPrenomChef,"mailChef":mailChef}).exec();

            return {"success": true, data: result}
        } catch (e) {
            console.log("error when searching a team" + e);
            return {success: false, data: null}
        }
    }
    static async getAll(competition){
        try {
            const result = await participantModel.find({"competition":competition}).exec();
            return {"success": true, data: result}

        } catch (e) {
            console.log("error when getting teams" + e);
            return {success: false, data: null}
        }
    }
}


module.exports = ParticipantDao ;