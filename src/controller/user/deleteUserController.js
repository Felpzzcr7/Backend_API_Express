import {deleteUser} from "../../models/userModel.js"

export async function deleteUserController(req, res) {
const id = req.params.id

const result = await deleteUser(+id)

return res.json({
  message:'usuario deletado com sucesso',
  user: result
})
}

