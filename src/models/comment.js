import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


const Comment = {
    create:async (post_id,content,commenter_name)=>{
        return await prisma.comment.create({
            data:{
                post_id,
                commenter_name,
                content
            }
        }) 
    
    },
    getAll:async (query_string)=>{
        const {post,commenter}=query_string
        const query_list = []

        if (post){
            query_list.push(
                {post_id:Number(post)}
            )
        }
        if (commenter){
            query_list.push(
                {commenter_name: commenter}
            )
        }
        return await prisma.comment.findMany({
            where: {
                AND:query_list
            }
        });
    },
    getById:async (id)=>{
        return await prisma.comment.findUnique({
            where: {
                id:Number(id)
            }
        }) 
    },
    update:async (id,post_id,content,commenter_name)=>{
        return await prisma.comment.update({
            where:{id:Number(id)},
            data:{
                post_id,
                content,
                commenter_name
            }
        })
    },
    delete:async (id)=>{
        return await prisma.comment.delete({
            where:{id:Number(id)},
           })
        }
    }


export default Comment