import React, {useState} from "react";
import "../App.css";
// import {useHistory
//   } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ContactUs() {
    // const history = useHistory();
    // const host ="http://localhost:5000";
    const [audience, setAudience] = useState({
        name:"", email:"", number:"", message:"" 
    });


    let name, value;    
    const handleInputs =(e) =>{
            console.log(e);
            name =e.target.name;
            value =e.target.value;
            setAudience({...audience, [name]:value});

    }

    // const PostData = async (e) =>{
    //     e.preventDeafault();

    //     const {name, email, number, message} = audience;
    //     const response = await fetch(`/api/user_routes/createuser`, {
    //         method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //         mode: 'no-cors',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name, email, number, message
    //         }) // body data type must match "Content-Type" header
    //       });
    //       const data = await response.json(); 

    //       if(data.status === 400 || !data){
    //           window.alert("Registration Unsuccessfully");
    //       }else{
    //         window.alert("Registration successfully");

    //         history.pushState("/ContactUs");
    //       }
    // }


  return (
    <section className="wrapper">
      <Helmet>
        <title>Spiritual Codes - Contact Us</title>
      </Helmet>
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
                <form method="POST">
                  <div className="data">
                    <div className="input-box">
                      <div className="text" data-aos="fade-down">
                        Name*:
                      </div>
                      <div className="input" data-aos="fade-down">
                        <input
                          type="text" name="name" value={audience.name} onChange={handleInputs}
                          required
                          className="input-data da"
                          id=""
                        />
                      </div>
                    </div>

                    <div className="input-box">
                      <div className="text" data-aos="fade-down">
                        E-mail*:
                      </div>
                      <div className="input" data-aos="fade-down">
                        <input
                          type="email" name="email" value={audience.email} onChange={handleInputs}
                          required
                          className="input-data da"
                          id=""
                        />
                      </div>
                    </div>

                    <div className="input-box">
                      <div className="text" data-aos="fade-down">
                        Mobile No. :
                      </div>
                      <div className="input" data-aos="fade-down">
                        <input
                          type="number" name="number" value={audience.number} onChange={handleInputs}
                          className="input-data da"
                          id=""
                        />
                      </div>
                    </div>

                    <div className="input-box">
                      <div className="text" data-aos="fade-down">
                        Message*:
                      </div>
                      <div className="input" data-aos="fade-down">
                        <textarea
                     name="message" value={audience.message} onChange={handleInputs}
                          required
                          className="input-data"
                          id=""
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                    <div className="btn">
                      <input
                        type="submit"
                        // onClick={PostData}
                        data-aos="fade-down"
                        className="btn-sub"
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
