const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String ,
  phoneNumber: Number,
  password: String,
  confirmPassword:String,
  photo : String ,
  energy : Number,
  date : Date,
  age : Number,

  
  
});

module.exports = User = mongoose.model("user", userSchema);
