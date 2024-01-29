const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();


dotenv.config({path:'./config.env'});
require('./db/conn');


app.use(express.json());
//linkin router files
app.use(require('./router/auth'));


const PORT = process.env.PORT; 
//middelware

const middelware = (req,res, next) =>{
  console.log('hello my middleware');
  next();
}


app.get('/register', middelware, (req,res) => {
  res.send('Hello world from the server');
})

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});