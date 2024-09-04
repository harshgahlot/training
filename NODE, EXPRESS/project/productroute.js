const express=require('express');
const storage=require('node-persist');
const router=express.Router();
storage.init();//initialize storage

router.post("/",async(req,res)=>{
    const {id,name,price,quantity}=req.body;
    await storage.setItem(id,req.body);
    res.send('Product added successfully')

})
router.put("/update/:id",async (req,res)=>{
    const id=req.params.id;
    const obj=await storage.getItem(id);
    if(id==obj.id){
        const {quantity}=req.body;
    obj.quantity=quantity;
    storage.updateItem(id,obj);
    return res.send("updated successfully")
    }else{
        res.send("no id found!");
    }
    
})
router.get("/",async(req,res)=>{
    const data=await storage.values();
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
router.get("/search/:name",async(req,res)=>{
    
    const name1=req.params.name;
    const data=await storage.values();
    const array= await data.filter(item=>item.name==name1)
    if(array){
        return res.send(array);
    }else{
        res.send('product not found');
    }
})

module.exports=router;