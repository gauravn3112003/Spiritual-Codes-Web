import React, { useState } from "react";
// import { useHistory } from "react-router";
import "../App.css";

export default function ContactUs() {
  const host = "http://localhost:5000";
  // const history = useHistory();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, number, message } = contact;
    const res = await fetch(`${host}/api/user_routes/createuser`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name, email, number, message 
      })
    })
    const data = await res.json();
    if(res.status=== 500 || !data){
      window.alert("Invalid registration");
    }else{
      window.alert("registration Successfull");

    }
  };

  return (
    <section className="wrapper">
      <div className="box">
        <h1>Contact Us</h1>
        <div className="projects">
          <div className="content-contact">
            <div className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias, magni nesciunt? Doloribus hic consequuntur a aut
              inventore quod, sequi quaerat corporis ad beatae perferendis,
              architecto voluptas sint. Earum inventore exercitationem ut optio
              odio expedita fugiat, suscipit odit animi nequus?
            </div>
            <div className="inputs">
              <img
                src="https://image.freepik.com/free-vector/recruitment-team-isometric-illustration-employers-candidates-3d-cartoon-characters-human-resources-management-hr-team-managers-studying-cv-recruiter-with-loudspeaker-job-search_276875-193.jpg"
                alt=""
              />
              <div className="form">
                <form>
                  <div className="data">
                    <div className="input-box">
                      <div className="text" data-aos="fade-down">
                        Name*:
                      </div>
                      <div className="input" data-aos="fade-down">
                        <input
                          type="text"
                          name="name"
                          required
                          className="input-data da"
                          id=""
                          onChange={onChange}
                          value={contact.name}
                        />
                      </div>
                    </div>

                    <div className="input-box">
                      <div className="text" data-aos="fade-down">
                        E-mail*:
                      </div>
                      <div className="input" data-aos="fade-down">
                        <input
                          type="email"
                          name="email"
                          required
                          className="input-data da"
                          id=""
                          onChange={onChange}
                          value={contact.email}
                        />
                      </div>
                    </div>

                    <div className="input-box">
                      <div className="text" data-aos="fade-down">
                        Mobile No. :
                      </div>
                      <div className="input" data-aos="fade-down">
                        <input
                          type="number"
                          name="number"
                          className="input-data da"
                          id=""
                          onChange={onChange}
                          value={contact.number}
                        />
                      </div>
                    </div>

                    <div className="input-box">
                      <div className="text" data-aos="fade-down">
                        Message*:
                      </div>
                      <div className="input" data-aos="fade-down">
                        <textarea
                          name="message"
                          required
                          className="input-data"
                          id=""
                          onChange={onChange}
                          value={contact.message}
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                    <div className="btn">
                      <input
                        type="submit"
                        data-aos="fade-down"
                        className="btn-sub"
                        onClick={postData}
                        value="Submit"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
