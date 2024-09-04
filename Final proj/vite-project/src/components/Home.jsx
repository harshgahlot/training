import React, { useEffect, useState } from "react";
import "../css/home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home({ setCr }) {
  const [courses, setCourses] = useState([]);
  const nav = useNavigate();
  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:8082/api/course");
      setCourses(response.data.slice(0, 6));
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  const coursecomp = (id) => {
    setCr(id);
    nav("/coursecompo");
  };
  useEffect(() => {
    fetchCourses();
    const carousel = document.querySelector(".carousel");
    const images = carousel.querySelectorAll("img");
    const totalWidth = Array.from(images).reduce(
      (acc, img) => acc + img.clientWidth,
      0
    );

    images.forEach((img) => {
      const clone = img.cloneNode(true);
      carousel.appendChild(clone);
    });

    const animationDuration = totalWidth / 100;
    carousel.style.animationDuration = `${animationDuration}s`;
  }, []);

  return (
    <>
      <div className="image-container">
        <div className="text-overlay text-container text-primary">
          <>
            <h1>Where top </h1>
            <h1>creatives learn, </h1>
            <h1>teach, and grow.</h1>
          </>
        </div>
        <img
          src="https://www.engagehealth.uk/wp-content/uploads/2021/06/Group-376.png"
          className="w-50"
          alt="..."
        />
      </div>

      <div className="carousel-container">
        <div className="carousel">
          <img
            src="https://static.skillshare.com/assets/images/loh/category_carousel/320x400/marketing.webp"
            alt="Marketing"
          />
          <img
            src="https://static.skillshare.com/assets/images/loh/category_carousel/320x400/graphic_design.webp"
            alt="Graphic Design"
          />
          <img
            src="https://static.skillshare.com/assets/images/loh/category_carousel/320x400/illustration.webp"
            alt="Illustration"
          />
          <img
            src="https://static.skillshare.com/assets/images/loh/category_carousel/320x400/animation.webp"
            alt="Animation"
          />
          <img
            src="https://static.skillshare.com/assets/images/loh/category_carousel/320x400/film_video.webp"
            alt="Film and video"
          />
          <img
            src="https://static.skillshare.com/assets/images/loh/category_carousel/320x400/freelance.webp"
            alt="Freelance"
          />
          <img
            src="https://static.skillshare.com/assets/images/loh/category_carousel/320x400/ui_ux_design.webp"
            alt="UI/UX"
          />
          <img
            src="https://static.skillshare.com/assets/images/loh/category_carousel/320x400/productivity.webp"
            alt="Productivity"
          />
          <img
            src="https://static.skillshare.com/assets/images/loh/category_carousel/320x400/photography.webp"
            alt="Photography"
          />
        </div>
      </div>
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
      <div className="container" style={{backgroundImage:"url(https://static.vecteezy.com/system/resources/previews/016/721/582/original/modern-wave-line-and-neon-color-free-png.png)",backgroundPosition:"center"}}>
      
        <div className="row text-center mt-5 ">
          <div className="col-md-4" ></div>
          <div className="col-md-4" >
            <h1>Why Everyone loves Mind Learning</h1>
            <br /><br />
            <p>
              Whether it's a first brush on canvas or the last frame in an
              animation, Mindlearning is here to support you on every step of your
              creative journey.
            </p>
            
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      


    </>
  );
}

export default Home;
