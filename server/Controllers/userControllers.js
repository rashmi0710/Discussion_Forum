const users = require("../models/userSchema");
const userotp = require("../models/userOtp");
const nodemailer = require("nodemailer");
const posts = require("../models/userPost");

//email config
const transpoter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

exports.userRegister = async (req, res) => {
  const { fname, email, password } = req.body;

  if (!fname || !email || !password) {
    res.status(400).json({ error: "Please Enter All Input Data" });
  }
  try {
    const presuer = await users.findOne({ email: email });

    if (presuer) {
      res.status(422).json({ error: "This User Already exist in our db" });
    } else {
      const userRegister = new users({ fname, email, password });
      const storeData = await userRegister.save();
      res.status(201).json(storeData);
    }
  } catch (error) {
    res.status(400).json({ error: "Invalis Details", error });
  }
};

//user send otp

exports.userOtpSend = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ error: "Please Enter Your Email" });
  }

  try {
    const preuser = await users.findOne({ email: email });

    if (preuser) {
      const OTP = Math.floor(100000 + Math.random() * 900000);

      const existEmail = await userotp.findOne({ email: email });

      if (existEmail) {
        const updateData = await userotp.findByIdAndUpdate(
          { _id: existEmail._id },
          {
            otp: OTP,
          },
          { new: true }
        );
        await updateData.save();

        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Sending Email For OTP Validation",
          text: `OTP:- ${OTP}`,
        };

        transpoter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("error", error);
            res.status(400).json({ error: "email not send" });
          } else {
            console.log("Email sent", info.response);
            res.status(200).json({ message: "Email sent sussesfully" });
          }
        });
      } else {
        const saveOtpData = new userotp({
          email,
          otp: OTP,
        });
        await saveOtpData.save();
        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Sending Email For OTP Validation",
          text: `OTP:- ${OTP}`,
        };

        transpoter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("error", error);
            res.status(400).json({ error: "email not send" });
          } else {
            console.log("Email sent", info.response);
            res.status(200).json({ message: "Email sent sussesfully" });
          }
        });
      }
    } else {
      res.status(400).json({ error: "User Not Registered" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
  }
};


exports.userLogin = async(req,res)=>{
    const {email,otp} = req.body;

    if(!otp || !email){
        res.status(400).json({error:"Please Enter Your OTP and email"})
    }
    try{
        const otpVerification = await userotp.findOne({email:email});
        if(otpVerification.otp === otp){
            const presuer = await users.findOne({email:email});
            //token genrate 
            const token = await presuer.genrateAuthtoken();
            res.status(200).json({message:"User Login Sussefully Done",userToken:token});
        }else{
            res.status(400).json({error:"Invalid OTP"})
        }
    }catch{
        res.status(400).json({error:"Invalid Details", error})
    }
}

exports.userPost = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400).json({ error: "Please provide user ID and post content." });
  }

  try {
    const newPost = new posts({ title, description });
    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: "Internal server error.", error });
  }
};



