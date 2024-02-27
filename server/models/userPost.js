const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  fname : {
    type:String,
    required:true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const posts = mongoose.model("posts", postSchema); 

module.exports = posts;
