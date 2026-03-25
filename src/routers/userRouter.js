import express from "express"
import { getUserController } from "../controller/user/getUserController.js"
import { createUserController } from "../controller/user/createUserController.js"
import { updateUserController } from "../controller/user/updateUserController.js"
import { updateAvatarController } from "../controller/user/updateAvatarController.js"
import { deleteUserController } from "../controller/user/deleteUserController.js"   




const router = express.Router()

router.get('/', getUserController)

router.post('/', createUserController)

router.put('/:id', updateUserController)

router.patch('/:id', updateAvatarController)

router.delete('/:id', deleteUserController)

export default router 