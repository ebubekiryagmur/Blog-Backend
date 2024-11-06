import { Router } from "express";
import { getComments,getCommentById,createComment,deleteComment,updateComment } from "../controllers/commentController.js";



const router = Router();

router.get('/',getComments)
router.get('/:id',getCommentById)
router.post('/',createComment)
router.delete('/:id',deleteComment)
router.put('/:id',updateComment)





export default router;