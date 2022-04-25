const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

let obj = {}

app.get("" , (req,res)=>{

   let id;

    if(obj[req.id] === undefined){
        obj[req.id] = 1;
    }
    else if(obj[req.id] >= 10){
        setTimeout(() => {
            obj[req.id] = 0;
        }, 60000);
        res.send( "Exceded the limit wait for 1 min ");
    }
    else{
        
        obj[req.id] = obj[req.id] + 1;
        console.log(id)
            
        id = setTimeout(()=>{

            obj[req.id] = 0;

        },60000)

    }
   
    
    return res.send( `${obj[req.id]} request made`);
})

app.listen(port , ()=>{
    console.log("listening to 5000")
})