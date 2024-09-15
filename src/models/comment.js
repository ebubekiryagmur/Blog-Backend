const knex=require('./knex')


const Comment = {
    create:(comment)=>{
        return knex('comments').insert(comment).returning('*')
    }
}

module.exports=Comment