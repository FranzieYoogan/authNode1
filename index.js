const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/user.routes.js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'yourKluster';

mongoose.connect(MONGO_URI)
  .then(() => {

    console.log(`Running at ${PORT}`);
    app.use(router);
    app.listen(PORT);

  })

  .catch(err => {

    console.log("Error connecting db",err);

  })
