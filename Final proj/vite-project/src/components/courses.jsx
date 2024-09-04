import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Courses({ setCr }) {
    const [courses, setCourses] = useState([]);
    const nav = useNavigate();
    const fetchCourses = async () => {
        try {
          const response = await axios.get('http://localhost:8082/api/course');
          setCourses(response.data);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };
      const coursecomp = (id) => {
        setCr(id);
        nav("/coursecompo");
      };
      useEffect(() => {
        fetchCourses();
      
      }, []);
    return ( 
        <>
  <div className="container-fluid d-flex justify-content-center flex-column align-items-center bg-dark">
        <h1 className="text-center text-light mt-3">Explore Online Courses</h1>
        <div className="row mt-3 mx-5 d-flex justify-content-center text-center">
          {courses.map((course, index) => (
            <div
              className="col col-md-3 d-flex justify-content-center m-2"
              key={index}
            >
              <div className="card w-100 h-100">
                <img
                  src={course.url}
                  className="card-img-top"
                  alt="Course Image"
                />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">${course.price}</p>
                  <button
                    onClick={() => coursecomp(course.id)}
                    className="btn-primary btn"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
          </>
     );
}

export default Courses;