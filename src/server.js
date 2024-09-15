require('dotenv').config()
const PORT=3000
const express=require('express')
const categoryRoutes=require('./routes/category')
const postRoutes=require('./routes/post')
const app=express()



app.use(express.json())


app.use('/categories',categoryRoutes)
app.use('/posts',postRoutes)



app.listen(PORT,()=>{
    console.log("Sunucu Ayakta")
})
