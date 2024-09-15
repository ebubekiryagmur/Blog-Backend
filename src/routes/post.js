const express=require('express')
const router=express.Router()
const Post = require("../models/post")


router.get('/',async (req,res)=>{
    try {
        const posts=await Post.getAll();
        res.json(posts)
    } catch (error) {
        res.status(400).json({message:'Hata oldu tekrar deneyiniz'})
    }
})

router.post('/',async (req,res)=>{
    try {
        const newPost=await Post.create(req.body);
        res.status(201).json(newPost)
    } catch (error) {
        res.status(400).json({message:'Hata oldu tekrar deneyiniz'})
    }
})

module.exports=router