import Post from "../models/post.js";



export const getPosts = async (req,res) => {
    try {
      const posts = await Post.getAll(req.query);
      res.json(posts);
    } catch (error) {
      res.status(400).json({ message: "Bir hata oluştu" });
    }
  };

  export const getPostById = async (req,res) =>{
    try {
      const {id}=req.params
      const post =await Post.getById(id)
      if(!post) {
        res.status(404)
      }
      res.json(post);
    } catch (error) {
      res.status(400).json({ message: "Bir hata oluştu" });
    }
  }

  export const createPost = async (req,res) => {
    try {
      const {category_id,title,content} =req.body
      const post = await Post.create(category_id,title,content)
      res.status(201).json({})
    } catch (error) {
      res.status(400).json({ message: "Bir hata oluştu" });
    }
  }

  export const deletePost = async (req,res) => {
    try {
      const {id} =req.params
      await Post.delete(id)
      res.status(204).json({})
    } catch (error) {
      res.status(400).json({ message: "Bir hata oluştu" });
    }
  }


  export const updatePost = async (req,res) => {
    try {
      const {id} =req.params
      const {category_id,title,content} =req.body
      await Post.update(id,category_id,title,content)
      res.status(202).json({})
    } catch (error) {
      res.status(400).json({ message: "Bir hata oluştu" });
    }
  }

 
