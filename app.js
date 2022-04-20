const express = require("express") ;
require("dotenv").config();
const mongoose= require("mongoose");
const mailRouter = require("./routes/mail.route")
const adminRouter = require("./routes/admin.route")
const participantRouter = require("./routes/participant.route")
const cors = require("cors");


const app = express() ;
app.use(cors({origin:'*'}));

const PORT = process.env.PORT || 5000 ;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/email" ,mailRouter )
app.use("/admin" , adminRouter)
app.use("/participant" , participantRouter)


mongoose.connect(process.env.databaseUri,
    {useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
    console.log( "connected to DB") ;
app.listen(PORT , () => console.log("server is running on port " + PORT))
})
    .catch(err => console.log ("error while connecting to DB" + err));




