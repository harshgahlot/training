import { useState } from "react";

function Userform() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const handlenamechange=(e)=>{
        setName(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Name is " + name + "email is: "+ email);
    }
    return (

        <div className="container">
            <h3>Name: {name}, Email:{email}</h3>
            <form>
                <input type="text" className="form-control mt-3" placeholder="Enter name" name="name" onChange={handlenamechange}></input>
                <input type="email" className="form-control mt-3" placeholder="Enter email" name="email" onChange={(e)=>setEmail(e.target.value)}></input>
                <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Userform;