import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import BookRoutes from './Routes/BookRoute.js'
import StudentRoutes from './Routes/StudentRouter.js'

const app = express();
app.use(express.json());
dotenv.config();

app.use('/book',BookRoutes);
app.use('/student',StudentRoutes);

mongoose.connect(process.env.URL)
.then(()=>{console.log('Connected to MongoDB')})
.catch((err)=>{console.log('Failed To Connect to mongoDB ',err)});

app.listen(process.env.PORT,()=>{
    console.log(`Server started on port: ${process.env.PORT}`)
})