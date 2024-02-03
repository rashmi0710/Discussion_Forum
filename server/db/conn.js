const dotenv = require("dotenv");
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;

mongoose.connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.log('Connected to MongoDB!!!');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

