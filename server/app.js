const dotenv = require("dotenv");
const express = require('express');
const app = express();
const router = require('./Routes/router');

dotenv.config({path:'./config.env'});
require('./db/conn');


app.use(express.json());
app.use(router);
//linkin router files

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