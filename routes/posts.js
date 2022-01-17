const express = require("express");
const Post = require("../models/Post");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

// Create a post
router.post("/", auth, async (req, res) => {
    try {
        const {desc} = req.body;
        const user = await User.findById(req.user._id);
        if(!user) {
            return res.status(404).json("User not found.");
        }

        const newPost = new Post({
            userId : user._id,
            desc : desc
        });
        const savedPost = await newPost.save();

        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Update a post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId) {
            await post.updateOne({$set : req.body});
            res.status(200).json("Post has been updated successfully.");
        } else {
            return res.status(403).json("You can update only your post.");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// Delete a post 
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            return res.status(200).json("Post has been deleted successfully.");
        }else{
            return res.status(403).json("You can only delete your post.");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

// like and dislike posts
router.put("/:id/likes", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)) {
            await post.updateOne({$push : { likes : req.body.userId}});
            return res.status(200).json("Post has been liked.")
        } else {
            await post.updateOne({$pull : {likes : req.body.userId}});
            return res.status(200).json("Post has been disliked.");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

// get posts
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get all timeline posts
router.get("/timeline/:userId", async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        // const userPosts = await Post.findById({userId : currentUser._id});

        // const friendPosts = await Promise.all(currentUser.following.map((friendId) => {
        //     return Post.find({userId : friendId});
        // }));

        // res.status(200).json(userPosts.concat(...friendPosts));

        const posts = await Post.find();

        const authenticatedPost = posts.filter((post) => post.userId.toString() === currentUser._id.toString());

        res.status(200).json(authenticatedPost);
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;