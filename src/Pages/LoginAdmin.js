import React from "react";
import  "../components/Styling/login.css"
import { Link } from "react-router-dom";
export default function LoginAdmin() {
  return (
    <>
      <section className="wrapper">
        <div className="box">
          {/* <h1>Login</h1> */}
          <div className="login">
            <form>
              <div className="img-login">
                <img src="https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100__340.jpg" alt="" srcset="" />
              </div>
              <h2>Login</h2>
              <div className="input-box">
                <div className="icon-login" >
                  <i class="bi bi-person-fill"></i>
                </div>
                <div className="input" data-aos="fade-down">
                  <input type="email" className="input-login" placeholder="Enter the E-mail" />
                </div>
              </div>

              <div className="input-box">
                <div className="icon-login" >
                  <i class="bi bi-key-fill"></i>
                </div>
                <div className="input" data-aos="fade-down">
                  <input type="password" className="input-login"  placeholder="Enter the Password" />
                </div>
              </div>
              <div className="checkbox">
                <input  type="checkbox" />
                Remember the password ?
              </div>
              <div className="btn">
                <input
                  type="submit"
                  data-aos="fade-down"
                  className="btn-sub"
                  value="Submit"
                />
                <Link to="/Dashboard">check</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
