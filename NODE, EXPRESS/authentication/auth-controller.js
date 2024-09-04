const storage=require('node-persist');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
async function register(req,res) {
    try {
        const {name,username,email,password}=req.body;
    if(!name || !email || !username || !password){
        return res.status(400).send({message:"All fields mandatory"});
    }
    const user=await storage.getItem(email);
    if(user){
        return res.status(400).send({message:"email is already registered"})
    }
    const hashpass=await bcrypt.hash(password,10);
    const newuser={
        name,
        username,
        email,
        password:hashpass
    }
    const resp=await storage.setItem(email,newuser);
    res.status(201).send({message:"user registered successfully",resp})
    } catch (error) {
        console.log(error);
    }
    
}
async function login(req,res) {
    
        const {email,password}=req.body;
    if( !email || !password){
        return res.status(400).send({message:"All fields mandatory"});
    }
    const user=await storage.getItem(email);
    if(!user){
        return res.status(400).send({message:"email is not registered"})
    }
    const check=await bcrypt.compare(password,user.password);
    if(check){
        const token=jwt.sign(user.email,"something")
        res.cookie('token',token);
        return res.status(400).send({message:"user logged in success",user})
    }else{
        return res.status(403).send({message:"invalid cred."})
    }
}
async function changepass(req,res) {
    
        const {oldpass,newpass}=req.body;
    if( !oldpass || !newpass){
        return res.status(400).send({message:"All fields mandatory"});
    }
    const user=await storage.getItem(email);
    if(!user){
        return res.status(400).send({message:"email is not registered"})
    }
    const check=await bcrypt.compare(password,user.password);
    if(check){
        const token=jwt.sign(user.email,"something")
        res.cookie('token',token);
        return res.status(400).send({message:"user logged in success",user})
    }else{
        return res.status(403).send({message:"invalid cred."})
    }
}
module.exports={register,login}