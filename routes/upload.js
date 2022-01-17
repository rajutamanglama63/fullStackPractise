const auth = require("../middleware/auth");
const cloudinary = require("cloudinary");
const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const router = express.Router();

// Cloudinary configuration for uploadin images in cloudinary
cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.CLOUD_API_KEY,
    api_secret : process.env.CLOUD_API_SECRET
});
// upload image in cloudinary
router.post('/upload', async (req, res) => {
    try {
        // console.log(req.files);
        // res.json("test upload");
    
        if(!req.files || Object.keys(req.files).length === 0) {
            res.status(400).json({msg : "No files were uploaded."});
        }       

        const file = req.files.file;
        // 1024*1024*1 = 1mb
        if(file > 1024*1024*3) {
            removeTem(file.tempFilePath);
            return res.status(400).json({msg : "File is too large. File must not be more then 3 mb."});
        }

        if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
            removeTem(file.tempFilePath);
            return res.status(400).json({msg : "Invalid file format."});
        }

        await cloudinary.v2.uploader.upload(file.tempFilePath, {folder : "fb_clone"}, (err, result) => {
            if(err) throw err;
            removeTem(file.tempFilePath);
            res.status(200).json({public_id : result.public_id, url : result.url});
        });
    } catch (error) {
        res.status(500).json({msg : error.message});
    }
});

// delete image in cloudinary
router.post('/destroy', async (req, res) => {
    try {
        const {public_id} = req.body;
        if(!public_id) {
            return res.status(400).json({msg : "Image does not selected."});
        }

        await cloudinary.v2.uploader.destroy(public_id, (err, result) => {
            if(err) throw err;

            res.status(200).json({msg : "Image deleted successfully."});
        });
    } catch (error) {
        res.status(500).json({msg : error.message});
    }
})

// every time after we upload file one folder is created automatically. To remove it we will create a function.
const removeTem = (path) => {
    fs.unlink(path, error => {
        if(error) throw error;
    });
}

module.exports = router;