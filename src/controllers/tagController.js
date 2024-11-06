import Tag from "../models/tag.js";



export const getTags = async (req,res) => {
    try {
      const tags = await Tag.getAll();
      res.json(tags);
    } catch (error) {
      res.status(400).json({ message: "Bir hata oluştu" });
    }
  };

  export const getTagById = async (req,res) =>{
    try {
      const {id}=req.params
      const tag =await Tag.getById(id)
      if(!tag) {
        res.status(404)
      }
      res.json(tag);
    } catch (error) {
      res.status(400).json({ message: "Bir hata oluştu" });
    }
  }

  export const createTag = async (req,res) => {
    try {
      const {name} =req.body
      const tag = await Tag.create(name)
      res.status(201).json(tag)
    } catch (error) {
      res.status(400).json({ message: "Bir hata oluştu" });
    }
  }

  export const deleteTag = async (req,res) => {
    try {
      const {id} =req.params
      await Tag.delete(id)
      res.status(204).json({})
    } catch (error) {
      res.status(400).json({ message: "Bir hata oluştu" });
    }
  }

  export const updateTag = async (req,res) => {
    try {
      const {id} = req.params
      const {name} =req.body
      await Tag.update(id,name)
      res.status(202).json({})
    } catch (error) {
      res.status(400).json({ message: "Bir hata oluştu" });
    }
  }