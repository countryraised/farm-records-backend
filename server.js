require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const routes = require('./routes');
const constants = require('./constants');

const corsOptions = {
    // origin: ['http://localhost:3000'],// link to surge- ['http://farm-record-app.surge.sh']
    origin: ['http://farm-record-app.surge.sh'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());



app.use((req,res,next) => {
    console.log("I run for all routes");
    next();
})

app.use('/farmrecord', routes.farmrecord);
app.use('/user', routes.user);


app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})