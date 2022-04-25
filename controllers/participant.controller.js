
const ParticipantDao = require("../dao/participant.dao");

class ParticipantController {
    static async add(req,res) {
        const {competition,nomEquipe,etablissement,nomPrenomChef,mailChef,telChef,membre1,membre2,membre3,membre4}=req.body;
        let isnum = /^\d+$/.test(telChef);
        if(isnum===false){
            return res.status(400).send("invalid phone number")
        }
        //const {email,password} = req.body ;
        const teamExists = await ParticipantDao.getteamByName(competition,nomEquipe,etablissement,nomPrenomChef,mailChef);
        if(teamExists.success === false){
            return res.status(500).json("error occurred while registering")
        }
        if(teamExists.data) {
            return res.status(400).send("team already registered in this competition")
        }
        
        const participantToSave = {
            competition,nomEquipe,etablissement,nomPrenomChef,mailChef,telChef,membre1,membre2,membre3,membre4
        }
        const savingResponse = await ParticipantDao.add(participantToSave);
        if(savingResponse.success===false){
            return res.status(500).send("error occurred while registering or team name already used")
        }
        return res.status(201).send("team created successfully")
    }

    static async get(req,res) {
        console.log('load');
        const competition = req.params.competition;

        const teams= await ParticipantDao.getByCompetition(competition);
        if(teams.success === false){
            return res.status(500).json("error ")
        }
        return res.status(200).json(teams.data);
        

        }

    static async delete(req,res){
        const id=req.params.id;

        const team = await ParticipantDao.deleteById(id);
        if(team.success === false){
            return res.status(500).json("error ")
        }
        return res.status(200).send("user deleted successfully");
        }
    
}


module.exports = ParticipantController ;