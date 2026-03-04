import express from "express"
import { getPostController } from "../controller/post/getPostController.js"
import { createPostController } from "../controller/post/createPostController.js"
import { updatePostController } from "../controller/post/updatePostController.js"
import { patchPostController } from "../controller/post/patchPostController.js"
import { deletePostController } from "../controller/post/deletePostController.js"     



const router = express.Router()

router.get('/', getPostController)

router.post('/', createPostController )

router.put('/', updatePostController)

router.patch('/', patchPostController)

router.delete('/', deletePostController)
  
export default router