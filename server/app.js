require("dotenv").config();

const express = require('express');
const app = express();

port = 8000;

app.listen(port, ()=>{
    console.log(`Server is running at port number ${port}`);
});
