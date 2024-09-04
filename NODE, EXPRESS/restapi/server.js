const express=require('express');
const usercontroller=require('./userroutes');
const custcontroller=require('./customroute');
const server=express();
const cors=require('cors');

//json parser
server.use(express.json());
server.use(cors());
server.use('/api/users',usercontroller);
server.use('/api/customers',custcontroller);

server.use((req,res)=>{
    res.send('page not found');
})

server.listen(5000,()=>{
    console.log("server started");
})