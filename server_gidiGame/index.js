const http = require('http');
const express = require("express");
const connectDB = require("./config/connectDB");

 const cors = require('cors');





const app = express();
const server = http.createServer(app);

const user = require('./routes/user.js');
app.use('/user' , user)
const port = process.env.PORT || 7000;



app.use(express.json());
 

connectDB();





server.listen(port, (err) =>
  err
    ? console.log("Server Error", err)
    : console.log(`Server is running on port ${port}`)
);