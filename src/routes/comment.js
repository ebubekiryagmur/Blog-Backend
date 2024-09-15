const express=require('express')
const router=express.Router()
const Comment = require('../models/comment')

router.post('/',async (req,res)=>{
    try {
        const newComment=await Comment.create(req.body)
        res.status(201).json(newComment)
    } catch (error) {
        res.status(400).json({message:'Hata oldu tekrar deneyiniz'})
    }
})



module.exports=router