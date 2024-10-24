import {Router} from 'express';
import { getCategories,getCategoryById,createCategory,updateCategory,deleteCategory  } from '../controllers/categoryController.js';

const router = Router();

router.get('/',getCategories)
router.get('/:id',getCategoryById)
router.post('/',createCategory)
router.put('/:id',updateCategory)
router.delete('/:id',deleteCategory)


export default router

// router.post('/',async (req,res)=>{
//     try {
//         const newCategory = await Category.create(req.body)
//         res.status(201).json(newCategory)
//     } catch (error) {
//         res.status(400).json({message:'Hata oldu tekrar deneyiniz'})
//     }
// })

// router.patch('/:id',async (req,res)=>{
//     try {
//         const updateCategory = await Category.update(req.params.id,req.body)
//         res.json(updateCategory)
//     } catch (error) {
//         res.status(400).json({message:'Hata oldu tekrar deneyiniz'})
//     }
// })

// router.delete('/:id',async (req,res)=>{
//     try {
//         const deletedCategory = await Category.delete(req.params.id)
//         res.json(deletedCategory)
//     } catch (error) {
//         res.status(400).json({message:'Hata oldu tekrar deneyiniz'})
//     }
// })





