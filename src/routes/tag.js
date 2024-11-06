import { Router } from "express";
import { getTags,getTagById,createTag,deleteTag,updateTag} from "../controllers/tagController.js";



const router = Router();

router.get('/',getTags)
router.get('/:id',getTagById)
router.post('/',createTag)
router.delete('/:id',deleteTag)
router.put('/:id',updateTag)






export default router;