
import React ,{ useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from '../assets/data.gif';

function Header({loggedIn,setLoggedIn,loggedAdmin,setLoggedAdmin}) {
  const navigate=useNavigate();
    const logout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('loggedAdmin');
    localStorage.removeItem('sid');
    setLoggedIn(false);
    setLoggedAdmin(false);
    navigate('/login');
  };
  
  
    return ( 
        <>
        <nav className="navbar navbar-expand-lg w-100 position-fixed z-1" style={{backgroundColor:"rgb(23, 32, 42 , 0.2)"}} >
  <div className="container-fluid">
  <a className="navbar-brand" href="#"><img src={image} alt="" style={{height:"50px"}} /></a>
    <h1>MIND LEARNING</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="courses">Courses</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="footer">Contact</a>
        </li>
        
      </ul>
      
     
      <form className="d-flex" role="search">
       
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {(loggedIn || loggedAdmin)?<>
          <li><button className="nav-link" onClick={logout}>Logout</button></li>
          </>
          :<>
          <li><a className="nav-link" href="login">Login</a></li>
          <li> <a className="nav-link" href="signup">Signup</a></li>
          </>
}
        </ul>
        
       
      </form>
    </div>
  </div>
</nav>



</>

     );
}

export default Header;