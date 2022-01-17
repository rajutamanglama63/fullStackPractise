const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/User");

const router = express.Router();

dotenv.config();

// REGISTER
router.post("/register", async (req, res) => {
    try {
        // generate hassed password
        const salt = await bcrypt.genSalt(10);
        const hassedPassword = await bcrypt.hash(req.body.password, salt);
    
        // create new user
        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hassedPassword
        });
    
        // save new user and respond
        const user = await newUser.save();

        // signing jwt token for authentication
        const accessToken = createAccessToken({_id : user._id, username : user.username, email : user.email});

    
        res.status(200).json(accessToken);
    } catch (error) {
        console.log(error);
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({email : req.body.email});
        if(!user) {
            return res.status(400).json("User not found.");
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) {
            return res.status(400).json("Invalid credential.");
        }
        
        // signing jwt token for authentication
        const accessToken = createAccessToken({_id : user._id, username : user.username, email : user.email});

        res.status(200).json(accessToken);
    } catch (error) {
        res.status(500).json(error);
    }
});

const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn : '1d'});
};

module.exports = router;