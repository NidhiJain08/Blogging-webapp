import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './models/Users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const app = express();
const saltRounds = 10;
const secret = 'asdfe45we45w345wegw345werjktjwertkj';
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(' ');

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const userDoc = await User.create({ username, password: hashedPassword });
        res.json(userDoc);
    } catch (e) {
        res.status(400).json(e);
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Login request received for username:', username);
    
    const userDoc = await User.findOne({ username });
    if (!userDoc) {
        console.log('User not found:', username);
        return res.status(400).json({ error: 'Invalid username or password' });
    }

    const passOk = bcrypt.compareSync(password, userDoc.password);
    // if (passOk) {
    //     console.log('Incorrect password for username:', username);
    //     return res.status(400).json({ error: 'Invalid username or password' });
    // }
    // else{

    // }
    // const token = jwt.sign({ username: userDoc.username }, 'your_jwt_secret');
    // res.cookie('token',token).json('ok');
    if (passOk) {
        // logged in
        jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
          if (err) throw err;
          res.cookie('token', token).json({
            id:userDoc._id,
            username,
          });
        });
      } else {
        res.status(400).json('wrong credentials');
      }
});

app.post('/logout',(req,res)=>{
    res.cookie('token','').json('ok');
})

app.get('/profile',(req,res)=>{
const{token}=req.cookies;
jwt.verify(token,secret,{},(err,info)=>{
    if(err) throw err;
    res.json(info);
});
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
