const knex=require('./knex')


const Comment = {
    create:(comment)=>{
        return knex('comments').insert(comment).returning('*');
    },
    getAll: ()=>{
        return knex('comments');
    },
    getById: (id)=>{
        return knex('comments').where({id}).first();
    },
    update: (id,comment)=>{
        return knex('comments').where({id}).update(comment).returning('*');
    },
    delete: (id)=>{
        return knex('comments').where({id}).delete();
    }
}

module.exports=Comment;