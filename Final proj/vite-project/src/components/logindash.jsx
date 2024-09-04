import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginDash = () => {
  const [student, setStudent] = useState({});
  const [course,setCourses]=useState({});
  const registerCourse = async (courseId) => {
    try {
      const studentId = localStorage.getItem('sid');
      const response = await axios.get(`http://localhost:8082/api/student/add/${studentId}/course/${courseId}`);
      setStudent(response.data);
      setCourses(response.data.course || []);
      console.log('Registered for course:', response.data);
      fetchCourse(student);
    } catch (error) {
      console.error('Error registering for course:', error);
    }
  };
  const fetchCourse = async (studentData) => {
    if (!studentData || !studentData.courses) {
      return;
    }
    try {
      const response = await axios.get('http://localhost:8082/api/course');
      const allCourses = response.data;
      const registeredCourseIds = studentData.courses.map(course => course.id);
      const availableCourses = allCourses.filter(course => !registeredCourseIds.includes(course.id));
      setCourses(availableCourses);
      console.log(availableCourses);
    } catch (error) {
      console.error('Error fetching course details:', error);
    }
  };
  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const id=localStorage.getItem('sid')
        const response = await axios.get(`http://localhost:8082/api/student/${id}`);
        setStudent(response.data);
        fetchCourse(response.data);
        
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    };
    
    fetchCourse(student);
    fetchStudentDetails();
    
   
   
  }, []);

  

  return (
    <div>
    <div class="d-inline p-2 bg-primary text-white">            Hi {student.name}</div>

      <h2>Registered Courses</h2>
      <div class="card mb-3" style={{maxWidth: "100vw"}}>
      {student.courses && student.courses.length > 0 ? (student.courses.map((course, index) => (
  <div class="row g-0 mb-3"  key={index}>
 
    
    <div class="col-md-4" >
      <img src={course.url} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{course.title}</h5>
        <p class="card-text">{course.description}</p>
        <p class="card-text"><small class="text-body-secondary">ENROLLED</small></p>
      </div>
    </div>
  
  </div>))):(
          <li>No registered courses</li>
        )}
</div>
      
      <h2>Available Courses</h2>
      <div className="container-fluid d-flex justify-content-center flex-column align-items-center bg-dark">
        <div className="row mt-3 mx-5 d-flex justify-content-center text-center">
          {course.length > 0 ?(course.map((course, index) => (
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
                    onClick={() => registerCourse(course.id)}
                    className="btn-primary btn"
                  >
                    Register Course
                  </button>
                </div>
              </div>
            </div>
          ))):
          (
            <li>No available courses</li>
        )}
        </div>
        </div>
      
    </div>
  );
};

export default LoginDash;
