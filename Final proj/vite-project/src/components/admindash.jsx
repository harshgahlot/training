
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [course, setCourse] = useState({
    title: '', description: '', price: '',url:''
  });
  const [editingCourse, setEditingCourse] = useState(null);

  useEffect(() => {
    fetchCourses();
    fetchStudents();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:8082/api/course');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8082/api/student');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const addCourse = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8082/api/course', course);
      setCourse({ title: '', description: '', price: '' , url:''});
      fetchCourses();
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const updateCourse = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8082/api/course/${editingCourse.id}`, editingCourse);
      console.log(editingCourse);
      setEditingCourse(null);
      fetchCourses();
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Admin Dashboard</h1>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="add-course-tab" data-toggle="tab" href="#add-course" role="tab" aria-controls="add-course" aria-selected="true">Add Course</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="view-courses-tab" data-toggle="tab" href="#view-courses" role="tab" aria-controls="view-courses" aria-selected="false">View Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="view-students-tab" data-toggle="tab" href="#view-students" role="tab" aria-controls="view-students" aria-selected="false">View Students</a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="add-course" role="tabpanel" aria-labelledby="add-course-tab">
          <form onSubmit={addCourse}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" className="form-control" id="title" placeholder="Enter title" value={course.title}
                onChange={(e) =>
                  setCourse({ ...course, title: e.target.value })
                } />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input type="text" className="form-control" id="description" placeholder="Description" value={course.description}
                onChange={(e) =>
                  setCourse({ ...course, description: e.target.value })
                } />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input type="text" className="form-control" id="price" placeholder="Price" value={course.price}
                onChange={(e) =>
                  setCourse({ ...course, price: e.target.value })
                } />
            </div>
            <div className="form-group">
                <label htmlFor="editurl">Image url</label>
                <input type="text" className="form-control" id="editurl" value={course.url}
                  onChange={(e) =>
                    setCourse({ ...course, url: e.target.value })
                  } />
              </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="tab-pane fade" id="view-courses" role="tabpanel" aria-labelledby="view-courses-tab">
        <div className="container-fluid d-flex justify-content-center flex-column align-items-center bg-dark">
        <div className="row mt-3 mx-5 d-flex justify-content-center text-center">
          {courses.length > 0 ?(courses.map((course, index) => (
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
                    onClick={() => setEditingCourse(course)}
                    className="btn-primary btn"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))):
          (
            <li>No available courses</li>
        )}
        </div>
        {editingCourse && (
            <form onSubmit={updateCourse}>
              <div className="form-group">
                <label htmlFor="editTitle">Title</label>
                <input type="text" className="form-control" id="editTitle" value={editingCourse.title}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, title: e.target.value })
                  } />
              </div>
              <div className="form-group">
                <label htmlFor="editDescription">Description</label>
                <input type="text" className="form-control" id="editDescription" value={editingCourse.description}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, description: e.target.value })
                  } />
              </div>
              <div className="form-group">
                <label htmlFor="editPrice">Price</label>
                <input type="text" className="form-control" id="editPrice" value={editingCourse.price}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, price: e.target.value })
                  } />
              </div>
              <div className="form-group">
                <label htmlFor="editurl">Image url</label>
                <input type="text" className="form-control" id="editurl" value={editingCourse.url}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, url: e.target.value })
                  } />
              </div>
              <button type="submit" className="btn btn-primary">Update</button>
            </form>
          )}
      </div>
      </div>
      
     
        <div className="tab-pane fade" id="view-students" role="tabpanel" aria-labelledby="view-students-tab">
          <h2>Students</h2>
          <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      {/* <th scope="col">Password</th> */}
    </tr>
  </thead>
  <tbody>
  {students.length > 0 ? (
              students.map((student, index) => (
    <tr key={index}>
      
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.email}</td>
      {/* <td className='hidetext'>{student.password}</td> */}
    </tr>
     ))
    ) : (
      <li>No registered students</li>
    )}
    </tbody>
    </table>
         
        </div>
      </div>
      </div>
    
  );
};

export default AdminDashboard;
