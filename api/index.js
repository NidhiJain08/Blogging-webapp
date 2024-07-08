import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './models/Users.js';
import bcrypt from 'bcrypt';

const app=express();
const saltRounds = 10; // Number of salt rounds (cost factor)
const salt = await bcrypt.genSalt(saltRounds);

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://nidhijainvision:qJf69YSiMp93IELy@cluster0.bdkemnl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/register',async(req,res)=>{
    const {username,password}=req.body;
    try{
        const userDoc=await User.create({username,password:bcrypt.hashSync(password,salt)});
        res.json(userDoc);
    }
    catch(e){
        res.status(400).json(e);
    }
    
});

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
});

//