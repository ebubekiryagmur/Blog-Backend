import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


const Tag = {
    create:async (name)=>{
        return await prisma.tag.create({
            data:{
                name  
            }
        })
    
    },
    getAll:async ()=>{
       
        return await prisma.tag.findMany();
    },
    getById:async (id)=>{
        return await prisma.tag.findUnique({
            where: {
                id:Number(id)
            }
        }) 
    },
    update:async (id,name)=>{
        return await prisma.tag.update({
            where:{id:Number(id)},
            data:{
                name
            }
        })
    },
    delete:async (id)=>{
        return await prisma.tag.delete({
            where:{id:Number(id)},
           })
        }
    }


export default Tag