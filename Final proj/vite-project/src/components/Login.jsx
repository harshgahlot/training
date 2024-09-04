import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ setLoggedIn, setLoggedAdmin }) {
  const [updated, setUpdated] = useState(0);
  const [student, setStudent] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "http://localhost:8082/api/student/login",
        student
      );
      if (resp.status === 200) {
        if(resp.data.id==5){
          alert("Welcome admin");
          setLoggedAdmin(true);
         setUpdated(resp.data.id);
         localStorage.setItem("loggedAdmin", true);
         localStorage.setItem("sid", resp.data.id);
          navigate("/admindash");
        }else{
          alert("logged in");
        setLoggedIn(true);
        setUpdated(resp.data.id);
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("sid", resp.data.id);
        console.log("Navigating to dashboard");
        navigate("/logindash");
        }
        
      }
    } catch (error) {
      alert("error");
      console.log(error);
    }
  };

 

  return (
    <>
      <section className="">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleLogin}>
              

                <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    value={student.email}
                    onChange={(e) =>
                      setStudent({ ...student, email: e.target.value })
                    }
                  />
                 
                </div>

                <div data-mdb-input-init className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    value={student.password}
                    onChange={(e) =>
                      setStudent({ ...student, password: e.target.value })
                    }
                  />
                  
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a href="signup" className="link-danger">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;

