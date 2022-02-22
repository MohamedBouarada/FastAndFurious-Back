const express = require("express") ;
require("dotenv").config();
const mailRouter = require("./routes/mail.route")

const app = express() ;

const PORT = process.env.PORT || 5000 ;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/email" ,mailRouter )



app.listen(PORT , ()=>console.log(`server running on port : ${PORT}`))

