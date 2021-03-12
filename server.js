require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }

app.use(cors(corsOptions))


app.use((req,res,next) => {
    console.log("I run for all routes");
    next();
})

app.use('/farmrecord', routes.farmrecord);


app.listen(3001, () => {
    console.log(`I am listening on port 3001`);
})
