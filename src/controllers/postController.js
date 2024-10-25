import Post from "../models/post.js";



export const getPosts = async (req,res) => {
    try {
      const posts = await Post.getAll(req.query);
      res.json(posts);
    } catch (error) {
      res.status(400).json({ message: "Bir hata oluştu" });
    }
  };