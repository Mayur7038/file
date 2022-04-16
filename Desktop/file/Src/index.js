const express = require("express")
const connect = require("./Config/db");
const cors  =require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());


app.use(express.json());

const userController = require("./Controller/Controller");

app.use("/" , userController);



app.listen(PORT , async()=>{

    try{

        await connect();
        console.log("listening to 5000");

    }
    catch(e){
        console.log(e);
    }


})