import { deletePub } from "../../models/pubModel.js"



export async function deletePubController(req, res) {
    
const id = req.params.id

const result = await deletePub(+id)

return res.json({
  message:'publicacao deletado com sucesso',
  publications: result
})
}  