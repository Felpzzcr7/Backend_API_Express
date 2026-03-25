import express from "express"
import { getPubController } from "../controller/publication/getPubController.js"
import { createPubController } from "../controller/publication/createpubController.js"
import { updatePubController } from "../controller/publication/updatePubController.js"
import { patchPubController } from "../controller/publication/patchPubController.js"
import { deletePubController } from "../controller/publication/deletePubController.js"     



const router = express.Router()

router.get('/', getPubController)

router.post('/', createPubController )

router.put('/:id', updatePubController)

router.patch('/:id', patchPubController)

router.delete('/:id', deletePubController)
  
export default router