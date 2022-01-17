const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const auth = async (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if(!token) {
            return res.status(400).json({msg : "Authentication error, access denied!"});
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err) {
                return res.status(400).json({msg : "Authentication error, access denied!"});
            }

            req.user = user;

            next();
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = auth;