import { getUsers } from '../../models/userModel.js';

export async function getUserController(req, res) {
   const result= await getUsers()  
    res.json({
        message: "Usuários encontrados com sucesso!",
        users: result
    })
}

