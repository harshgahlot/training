import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Coursecompo({ cr }) {
  const [course, setCourse] = useState({});
  const nav=useNavigate();
  const getCourse = async (e) => {
    
    try {
      const response = await axios.get(
        `http://localhost:8082/api/course/${cr}`
      );
      setCourse(response.data);
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };
  const handleClick= async (cid)=>{
    
    const usr=localStorage.getItem('loggedIn')
    const adm=localStorage.getItem('loggedAdmin')
    const id=localStorage.getItem('sid')
    if(usr && !adm){
      const response = await axios.get(`http://localhost:8082/api/student/add/${id}/course/${cid}`);
    }else{
      alert("Login Or Signup First");
      nav('/login');
    }
  }
  useEffect(() => {
    getCourse();
  }, []);
  return (
    <>
      <div className="card text-bg-dark">
        <img src={course.url} className="card-img" alt="..." style={{height:"80vh",opacity:"0.6"}} />
        <div className="card-img-overlay">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">
           {course.description}
          </p>
          <p className="card-text">
            <small>{course.price}</small>
          </p>
          <button onClick={()=>handleClick(course.id)}>ENROLL</button>
        </div>
      </div>
    </>
  );
}

export default Coursecompo;
