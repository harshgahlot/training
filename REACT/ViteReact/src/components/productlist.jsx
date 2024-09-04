import { useState } from "react";
import Productform from "./productform";
import Productdetails from "./productdetails";

function Productlist() {
    const [selected,setSelected]=useState(null);
    const [products, setProducts]=useState([]);
    const addprod=(obj)=>{
        setProducts([...products,obj]);//obj is coming from child component
        alert('product added success');
        // setProducts([]);
    }
    return ( 
        <div className="container mt-3 p-2 " style={{border: '2px solid red'}}>
            <h3>Product List Component</h3>
            <table className="table table-bordered">
                <thead><tr><th>ID</th><th>NAME</th><th>PRICE</th></tr></thead>
                <tbody>
                    {
                        products.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={()=>setSelected(item)}>view</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="row p-2">
                <div className="col">
            <Productform addprod={addprod}/>
            </div>
            <div className="col">
                {selected && <Productdetails product={selected}/>}
            </div>
            </div>
        </div>
     );
}

export default Productlist;