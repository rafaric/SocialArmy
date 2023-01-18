require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieparser = require('cookie-parser');


const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieparser());
const port = process.env.PORT || 5000;
const url = process.env.MONGODB_URI;

mongoose.connect(url, {
  useNewUrlParser:true,
  useUnifiedTopology: true,

  }, err=>{if(err) throw err;
  console.log('base de datos online');
})

app.get('/', (req, res) =>{
  res.status(500).send("Hello World");
})
app.listen(port, ()=>{
  console.log('la app se está ejecutando')
})