const dotenv = require("dotenv");
dotenv.config({path:'./config.env'});
const PORT = process.env.PORT; 
const express = require('express');
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");

//middleware
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT,()=>{
  console.log(`Server start at port no: ${PORT}`);
});
