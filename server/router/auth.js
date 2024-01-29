const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require("../model/userschema");


router.get('/', (req,res) => {
    res.send('Hello world from the server of router');
});

router.post('/register', async(req,res)=>{
    const {name, email} = req.body;
    if(!name, !email){
        return res.status(422).json({error:"please filled the field properly"});
    }
    try{
        const userExist = await User.findOne({email : email});
        if(userExist){
            return res.status(422).json({error: "email already exist"});
        }

        const user = new User({name, email});
        await user.save();
        res.status(201).json({message: "user registered sussessfully"});
    } catch(err){
        console.log(err);
    }

});



module.exports = router;



