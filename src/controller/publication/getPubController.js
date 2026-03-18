import {getpub} from '../../models/pubModel.js';

export async function getPubController(req, res) {
    const result = await getpub()
    res.json({
        message: "Publicações encontradas com sucesso!",
        publications: result
    })
    
}
