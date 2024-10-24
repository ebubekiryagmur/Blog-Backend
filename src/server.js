import express from 'express';
import categoryRoutes from './routes/category.js'; 


const PORT=3000



const app = express();

app.use(express.json())


app.use('/categories',categoryRoutes)




app.listen(PORT,()=>{
    console.log("Sunucu Ayakta")
})
