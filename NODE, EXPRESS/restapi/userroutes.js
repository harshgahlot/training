const express=require('express');
let users=[];
const router=express.Router();

router.get('/',(req,res)=>{
    res.send(users)
})

router.get('/:id',(req,res)=>{
    const id=req.params.id;
    const found=users.find(item=>item.id==id);
    if(found){
        res.send(found);
    }else{
        res.send(id+" user not found");
    }
})

router.post('/',(req,res)=>{
    const data= req.body;
    console.log(data);
    users.push(data);
    res.send("user success")
})

router.put('/',(req,res)=>{
    res.send("user updated")
})

router.delete('/',(req,res)=>{
    res.send("user deleted")
})

module.exports=router;