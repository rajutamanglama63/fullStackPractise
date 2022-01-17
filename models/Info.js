const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
    userId : {
        type : String
    },
   city : {
       type : String,
       max : 50
   },
   from : {
       type : String,
       max : 50
   },
   desc : {
       type : String,
       max : 50
   },
   relationShip : {
       type : String,
   }
},
{timestamps : true}
);

const Info = mongoose.model("information", infoSchema);

module.exports = Info;