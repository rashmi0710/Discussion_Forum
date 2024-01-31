const mongoose = require('mongoose');
const validator = require("validator");
const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim:true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Not Valid Email")
      }
    }
  },
  password:{
    type:String,
    required:true,
    minlength:6
  }
 
});

// creating model
const users = mongoose.model('users', userSchema);

module.exports = users;
