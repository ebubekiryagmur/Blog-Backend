const knex=require('./knex')

const Post = {
    getAll:()=>{
        return knex('posts').whereNull('deleted_at')
    },
    create:(post)=>{
        return knex('posts').insert(post).returning('*')
    }
}


module.exports=Post;