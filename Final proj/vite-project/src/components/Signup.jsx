import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [student, setStudent] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const handleregister = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "http://localhost:8082/api/student",
        student
      );
      if (resp.status == 201) {
        alert("registered");
        navigate("/login");
      }
    } catch (error) {
      alert("error");
      console.log(error);
    }
  };
  return (
    <>
      <section className="">
        <div className="px-4 py-5 px-md-5 text-center text-lg-start">
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  The best decision <br />
                  <span className="text-primary">of your career</span>
                </h1>
                <p>
                  Join our learning platform today! Unlock a world of knowledge
                  with expert-led courses, interactive lessons, and a supportive
                  community. Sign up now to start your journey towards achieving
                  your educational goals!
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form onSubmit={handleregister}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init className="form-outline">
                            <label className="form-label" for="form3Example1">
                              Name
                            </label>
                            <input
                              type="text"
                              id="form3Example1"
                              className="form-control"
                              value={student.name}
                              onChange={(e) =>
                                setStudent({ ...student, name: e.target.value })
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" for="form3Example3">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="form3Example3"
                          className="form-control"
                          value={student.email}
                          onChange={(e) =>
                            setStudent({ ...student, email: e.target.value })
                          }
                        />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" for="form3Example4">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control"
                          value={student.password}
                          onChange={(e) =>
                            setStudent({ ...student, password: e.target.value })
                          }
                        />
                      </div>

                    

                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-primary btn-block mb-4"
                      >
                        Sign up
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
