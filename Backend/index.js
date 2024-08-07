import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
import loginRoutes from './routes/loginRoutes.js'

dotenv.config();

const app=express();

app.use(cors());
app.use(express.json({limit:'50mb'}))

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);
app.use('/auth',loginRoutes);

app.get('/',async(req,res)=>{
    res.send('Hello from Stability AI')
})

const startserver = async () => {
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen('8080',()=>console.log('Server has started on port http://localhost:8080'));
    }
    catch(error){
        console.log(error);
    }

}

startserver();