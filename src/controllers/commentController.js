import Comment from "../models/comment.js";



export const getComments = async (req,res) => {
    try {
      const comments = await Comment.getAll(req.query);
      res.json(comments);
    } catch (error) {
      res.status(400).json({ message: "Bir hata oluştu" });
    }
  };

  export const getCommentById = async (req,res) =>{
    try {
      const {id}=req.params
      const comment =await Comment.getById(id)
      if(!comment) {
        res.status(404)
      }
      res.json(comment);
    } catch (error) {
      res.status(400).json({ message: "Bir hata oluştu" });
    }
  }

  export const createComment = async (req,res) => {
    try {
      const {post_id,content,commenter_name} =req.body
      const comment = await Comment.create(post_id,content,commenter_name)
      res.status(201).json(comment)
    } catch (error) {
      res.status(400).json({ message: "Bir hata oluştu" });
    }
  }

  export const deleteComment = async (req,res) => {
    try {
      const {id} =req.params
      await Comment.delete(id)
      res.status(204).json({})
    } catch (error) {
      res.status(400).json({ message: "Bir hata oluştu" });
    }
  }

  export const updateComment = async (req,res) => {
    try {
      const {id} = req.params
      const {post_id,content,commenter_name} =req.body
      await Comment.update(id,post_id,content,commenter_name)
      res.status(202).json({})
    } catch (error) {
      res.status(400).json({ message: "Bir hata oluştu" });
    }
  }





