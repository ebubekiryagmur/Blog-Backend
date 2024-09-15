const express=require('express')
const router=express.Router()
const Comment = require('../models/comment')



router.get('/',async (req,res)=>{
    try {
        const comments=await Comment.getAll();
        res.json(comments)
    } catch (error) {
        res.status(400).json({message:'Hata oldu tekrar deneyiniz'})
    }
})

router.get('/:id',async (req,res)=>{
    try {
        const comment=await Comment.getById(req.params.id)
        if(!comment){
            res.status(404);
        }
        res.json(comment);
    } catch (error) {
        res.status(400).json({message:'Hata oldu tekrar deneyiniz'})
    }
})



router.post('/',async (req,res)=>{
    try {
        const newComment=await Comment.create(req.body)
        res.status(201).json(newComment)
    } catch (error) {
        res.status(400).json({message:'Hata oldu tekrar deneyiniz'})
    }
})

router.put('/:id',async (req,res)=>{
    try {
        const updatedComment=await Comment.update(req.params.id,req,body)
        res.json(updatedComment)
    } catch (error) {
        res.status(400).json({message:'Hata oldu tekrar deneyiniz'})
    }
})

router.delete('/:id',async (req,res)=>{
    try {
        await Comment.delete(req.params.id)
        res.status(202).json({})
    } catch (error) {
        res.status(400).json({message:'Hata oldu tekrar deneyiniz'})
    }
})



module.exports=router;