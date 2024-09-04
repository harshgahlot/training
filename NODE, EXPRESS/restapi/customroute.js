const express=require('express');
const storage=require('node-persist');
const router=express.Router();
storage.init();//initialize storage
router.get("/",async(req,res)=>{
    const data= await storage.values();
    res.status(200).send(data);
})
router.get("/:id",async(req,res)=>{
    const id=req.params.id;
    const data=await storage.getItem(id);
    if(data){
        return res.send(data);
    }else{
        res.send('data not found');
    }

})

router.post("/",async(req,res)=>{
    const {id,name,email}=req.body;
    await storage.setItem(id,req.body);
    res.send('user registered successfully')

})
router.delete("/:id",async(req,res)=>{
    const id=req.params.id;
    const data=await storage.getItem(id)
    if (data){
        await storage.removeItem(id);
        return res.send("deleted")
    }else{
        return res.send('not found');
    }

})
router.put("/:id",async(req,res)=>{
    const id=req.params.id;
    const data=await storage.getItem(id);
    if(data){
        const {name,email}=req.body;
        await storage.updateItem(id,{id, name, email})
        return res.send("updated");
    }else{
        res.send('data not found');
    }
})

module.exports=router;