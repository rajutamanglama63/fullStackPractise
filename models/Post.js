const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId : {
        type : String
    },
    img : {
        type : Object,
    },
    desc : {
        type : String,
        max : 500
    },
    likes : {
        type : Array,
        default : []
    },
},
{timestamps : true}
);

const Post = mongoose.model("post", postSchema);

module.exports = Post;