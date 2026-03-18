import { createPublication } from '../../models/pubModel.js';

export async function createPubController(req, res) {
  const publication = req.body;

 const result = await createPublication(publication)
    res.json({
        message: "Publicação criada com sucesso!",
        publication: result
    })
  }