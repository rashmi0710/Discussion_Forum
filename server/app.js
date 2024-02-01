const dotenv = require("dotenv");
const express = require('express');
const app = express();
const cors = require("cors");
const router = require('./Routes/router');
dotenv.config({path:'./config.env'});
const PORT = process.env.PORT; 
require('./db/conn');


app.use(express.json());
app.use(cors());
app.use(router);


app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});