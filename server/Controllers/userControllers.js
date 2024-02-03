const users = require("../models/userSchema");



exports.userRegister = async(req,res)=>{
    const {fname,email,password} = req.body;

    if(!fname || !email || !password){
        res.status(400).json({error:"Please Enter All Input Data"})
    }
    try{
        const presuer = await users.findOne({email:email});

        if(presuer){
            res.status(422).json({error:"This User Already exist in our db"})
        }else{
            const userRegister = new users({fname,email,password});
            const storeData = await userRegister.save();
            res.status(201).json(storeData);
        }    
    }catch(error){
        res.status(400).json({error:"Invalis Details", error})
    }
}