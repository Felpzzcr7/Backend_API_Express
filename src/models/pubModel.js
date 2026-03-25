import {prisma} from '../helpers/dbConnection.js ';

export const createPublication = async (publication) => {
    return await prisma.publication.create({
        data: publication
    });
}

export const getpub = async () => {
    return await prisma.publication.findMany()
}

export const deletePub = async (id)=> {
    return await prisma.publication.delete ({
        where: {
            id
        }
    }
    )
}

export const updatePub = async(publication, id)=>{
    return await prisma.publication.update({
        data: publication,
        where:{
            id
        }
    }) 
}