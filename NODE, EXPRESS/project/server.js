const express=require('express');

const server =express();
const cors=require('cors');
const prodcontroller=require('./productroute');

server.use(express.json());
server.use(cors());
server.use('/api/product',prodcontroller);

server.listen(5000,()=>{
    console.log("server started");
    
})