import { updatePub } from "../../models/pubModel.js"        


export async function updatePubController(req, res) {
       const {id}= req.params
        const pub = req.body
    
        const result = await updatePub(pub, +id)
    
        return res.json({
          message: "publicaco atualizado com sucesso",
          pub: result
        })
}