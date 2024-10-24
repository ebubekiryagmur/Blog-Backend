import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import {SHOW_DELETED} from '../const.js'


const Category ={
    getAll:async (query)=>{
        const {showDeleted}=query
        if(showDeleted === SHOW_DELETED.TRUE){
            return await prisma.category.findMany();
        }else if (showDeleted === SHOW_DELETED.ONLY_DELETED){
            return await prisma.category.findMany({
                where:{
                    deleted_at:{
                        not:null
                    }
                }
            });
        }else {
            return await prisma.category.findMany({
                where:{
                    deleted_at:null
                }
            });
        }
       
    },

    getById:async (id)=>{
        return await prisma.findUnique({
            where:{
                id:Number(id)
            }
        })
    },

    create: async (name)=>{
        return await prisma.category.create(
            {
                data:{name}
            }
        )
    },

    update:async (id,new_name)=>{
        return await prisma.category.update({
            where:{id:Number(id)},
            data:{name:new_name}
        })
    },

    delete:async (id)=>{
        return await prisma.category.update({
            where:{id:Number(id)},
            data:{deleted_at:new Date()}
        })
    }
}

export default Category