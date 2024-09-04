// import './App.css'

import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import StudentDashboard from "./components/logindash";
import { useState } from "react";
import Protectedroute from "./components/protected.jsx";
import LoginDash from "./components/logindash";
import AdminDashboard from "./components/admindash.jsx";
import Coursecompo from "./components/coursecompo.jsx";
import Footer from "./components/footer.jsx";
import Courses from "./components/courses.jsx";

function App() {
  const [loggedIn,setLoggedIn]=useState(localStorage.getItem('loggedIn') || false);
  const [loggedAdmin,setLoggedAdmin]=useState(localStorage.getItem('loggedAdmin') || false);
  const [cr,setCr]=useState(1);

  return (
    <div>
      <Router>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} loggedAdmin={loggedAdmin} setLoggedAdmin={setLoggedAdmin} />
        <div style={{paddingTop:'100px'}}>
          <Routes>
            <Route path="login" element={<Login setLoggedIn={setLoggedIn} setLoggedAdmin={setLoggedAdmin} />} />
            <Route path="logindash/*" element={<Protectedroute isAUthenticated={loggedIn}>
    <LoginDash /> </Protectedroute>}/>
            <Route path="admindash/*" element={<Protectedroute isAUthenticated={loggedAdmin}>
    <AdminDashboard /> </Protectedroute>}/>
            <Route path="signup" element={<Signup />} />
            <Route path="home" element={<Home setCr={setCr} />} />
            <Route path="coursecompo" element={<Coursecompo cr={cr} />} />
            <Route path="courses" element={<Courses setCr={setCr} />} />
            
            
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
