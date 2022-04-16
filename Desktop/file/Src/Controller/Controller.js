const  express = require("express");

const router = express.Router();

const User = require("../Model/Model");

router.post("" , async(req,res)=>{

    try{

        const user = await User.create(req.body);

        return res.status(201).send(user);

    }
    catch(e){
        res.status(400).send(e.message);
    }

})



router.get("" , async(req,res)=>{

    try{

        const user = await User.find().lean().exec();
        return res.status(201).send(user);

    }
    catch(e){
        return res.send(e.message);
    }

})

module.exports = router;