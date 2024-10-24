import Category from '../models/category.js'



export const getCategories = async (req,res) => {
    try {
      const categories = await Category.getAll(req.query);
      res.json(categories);
    } catch (error) {
      res.status(400).json({ message: "Bir hata oluştu" });
    }
  };

  export const getCategoryById = async (req,res) => {
    try {
      const { id } = req.params;
      const category = await getById(Number(id));
      if (!category) {
         res.status(404)
      } 
        res.json(category);
    } catch (error) {
      res.status(500) .json({ message: "Bir hata oluştu" });
    }
  };

  export const createCategory = async(req,res)=>{
    try {
      const {name} =req.body
      const category =await Category.create(name)
      res.status(201).json({})
    } catch (error) {
      res.status(500) .json({ message: "Bir hata oluştu" });
    }
  }

  export const updateCategory = async (req,res)=> {
    try {
      const {id}=req.params
      const{name}=req.body
      await Category.update(id,name)
      res.status(202).json({})
    } catch (error) {
      res.status(500) .json({ message: "Bir hata oluştu" });
    }
  }

  export const deleteCategory = async (req,res)=> {
    try {
      const {id}=req.params
      await Category.delete(id)
      res.status(204).json({})
    } catch (error) {
      res.status(500) .json({ message: "Bir hata oluştu" });
    }
  }