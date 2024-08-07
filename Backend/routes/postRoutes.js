import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import {Post} from '../mongodb/models/post.js';

dotenv.config()

const router = express.Router();

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

router.route('/all').post(async (req, res) =>{
    try {
      const { userName } = req.body;
      console.log(userName);
      const posts = await Post.find({user:userName});
      console.log('Found posts:', posts.length);
      res.status(200).json({ success: true, data: posts });
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  });

router.route('/add').post(async (req, res) =>{

    try {
        const { name, prompt, photo, userName } = req.body;
        
        console.log(userName);
        console.log(prompt);

        let photo_url;
        try {
            photo_url = await cloudinary.uploader.upload(photo);
            console.log('Cloudinary upload successful:', photo_url.secure_url);
        } catch (uploadError) {
            console.error('Cloudinary upload error:', uploadError);
            return res.status(500).json({ success: false, message: 'Error uploading image to Cloudinary' });
        }

        const newPost = await Post.create({
            name: name,
            prompt: prompt,
            photo: photo_url.secure_url,
            user:userName, 
        });

        console.log('New post created:', newPost);

        res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
    
});

router.route('/deleteimg').post(async (req, res) =>{
    try {
      const { id } = req.body;
      console.log(id);
      const posts = await Post.deleteOne({_id:id});
      res.status(200).json({ success: true});
    } catch (error) {
      console.error('Error deleting post:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  });

export default router;