import React from "react";
import "../components/Styling/login.css";
export default function LoginAdmin() {
  return (
    <>
      <section className="wrapper">
        <div className="box">
          {/* <h1>Login</h1> */}
          <div className="login">
            <form action="/Dashboard">
              <div className="img-login">
                <img
                  src="https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100__340.jpg"
                  alt=""
                  srcSet=""
                />
              </div>
              <h2>Login</h2>
              <div className="input-box">
                <div className="icon-login">
                  <i className="bi bi-person-fill"></i>
                </div>
                <div className="input" data-aos="fade-down">
                  <input
                    type="email"
                    className="input-login"
                    placeholder="Enter the E-mail"
                  />
                </div>
              </div>

              <div className="input-box">
                <div className="icon-login">
                  <i className="bi bi-key-fill"></i>
                </div>
                <div className="input" data-aos="fade-down">
                  <input
                    type="password"
                    className="input-login"
                    placeholder="Enter the Password"
                  />
                </div>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                Remember the password ?
              </div>
              <div className="btn">
                <input
                  type="submit"
                  data-aos="fade-down"
                  className="btn-sub"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
