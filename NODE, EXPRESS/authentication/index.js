const express=require('express');
const storage=require('node-persist');
storage.init();

const app=express();
app.use(express.json());//JSON parser

app.use('/api/auth',require('./auth-router'));

app.listen(5000,()=>console.log("server started"))