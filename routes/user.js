const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const auth = require("../middleware/auth");
const router = express.Router();

// update user
router.put("/:id", auth, async (req, res) => {
    const userId = req.user._id;
    if(userId == req.params.id || req.body.isAdmin) {
        if(req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                res.status(500).json(error);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set : req.body,
            });

            res.status(200).json("Account has been updated successfully.");
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
       return res.status(403).json("You can only update your account.");
    }
});

// delete user
router.delete("/:id", async (req, res) => {
    if(req.body.userId == req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);

            res.status(200).json("Account has been deleted successfully.");
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        return res.status(403).json("You can only delete your account.");
    }
});

// get user by id
router.get("/:id", async (req, res) => {
    try {
       const user = await User.findById(req.params.id);

        //for selecting limited data
        const {password, updatedAt, ...other} = user._doc;
       
        res.status(200).json(other);
    } catch (error) {
        res.status(500).json(error);
    }
});

// follow user
router.put("/:id/follow", auth, async (req, res) => {
    const userId = req.user._id;
    if(userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const current_user = await User.findById(userId);

            if(!user.followers.includes(userId)) {
                await user.updateOne({$push : {followers : userId}});
                await current_user.updateOne({$push : {following : req.params.id}});

                return res.status(200).json("User has been followed.");
            } else {
                return res.status(400).json("You already follow this user");
            }
        } catch (error) {
            res.status(400).json(error);
        }
    } else {
        return res.status(403).json("You can not follow yourself.");
    }
});

// unfollow user
router.put("/:id/unfollow", async (req, res) => {
    if(req.body.userId !== req.params.id) {
        const user = await User.findById(req.params.id);
        const current_user = await User.findById(req.body.userId);

        if(user.followers.includes(req.body.userId)){
            await user.updateOne({$pull : {followers : req.body.userId}});
            await current_user.updateOne({$pull : {following : req.params.id}});

            return res.status(200).json("User unfollowed successfully.");
        }else{
            return res.status(400).json("You already unfollowed this user.");
        }
    } else {
        return res.status(403).json("You can not unfollow yourself.");
    }
})

module.exports = router;