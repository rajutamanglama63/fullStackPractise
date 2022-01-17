const express = require("express");
const auth = require("../middleware/auth")
const Info = require("../models/Info");

const router = express.Router();

router.post("/", auth, async (req, res) => {
    try {
        const userId = req.user._id;
        const { city, from, relationShip, desc } = req.body;

        const profileInformation = new Info({
            userId,
            city,
            from,
            relationShip,
            desc
        });

        await profileInformation.save();

        res.status(200).json(profileInformation);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;