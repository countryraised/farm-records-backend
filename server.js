const express = require('express');
const app = express();


app.use((req,res,next) => {
    console.log("I run for all routes");
    next();
})



app.listen(3000, () => {
    console.log("listing on port 3000!");
});