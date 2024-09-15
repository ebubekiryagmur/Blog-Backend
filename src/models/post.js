const knex=require('./knex')

const Post = {
    getAll:()=>{
        return knex('posts').whereNull('deleted_at');
    },
    create:(post)=>{
        return knex('posts').insert(post).returning('*');
    },
    getById:(id)=>{
        return knex('posts').whereNull('deleted_at').where({id}).first();
    },
    update:(id,post)=>{
        return knex('posts').whereNull('deleted_at').where({id}).update(post).returning('*');
    },
    delete:(id)=>{
       return knex('posts').where({id}).update({deleted_at:new Date()}).returning('*');
    }
}


module.exports=Post;