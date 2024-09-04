import { useState } from "react";

function Productform({addprod}) {
    const [product,setProduct]=useState({name:'',price:''})
    const handlesubmit=(e)=>{
        e.preventDefault();
        product.id=Math.floor(Math.random()*1000);
        
        addprod(product)
        setProduct({name:'',price:''});

    }
    return ( 
        <div>
        <form onSubmit={handlesubmit}>
            <input type="text" name="name" placeholder="Enter name of Product"
            onChange={(e)=>setProduct({...product,name:e.target.value})} className="form-control mt-3" value={product.name}/>
            <input type="text" name="price" placeholder="Enter price of Product"
            onChange={(e)=>setProduct({...product,price:e.target.value})} className="form-control mt-3" value={product.price}/>
            <button type="submit">Add Product</button>
        </form>
        </div>
     );
}

export default Productform;
