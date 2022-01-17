const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   username : {
       type : String,
       required : true,
       max : 10,
       min : 3
   },
   email : {
       type : String,
       required : true,
       unique : true,
       max : 50
   },
   password : {
       type : String,
       required : true,
       min : 5
   },
   profilePicture : {
        type : String,
        default : ""
   },
   coverPicture : {
        type : String,
        default : ""
   },
   followers : {
        type : Array,
        default : []
   },
   following : {
        type : Array,
        default : []
   },
   isAdmin : {
        type : Boolean,
        default : false
   },
},
{timestamps : true}
);

const User = mongoose.model("user", userSchema);

module.exports = User;