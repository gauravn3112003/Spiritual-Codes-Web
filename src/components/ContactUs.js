import React from 'react'
import "../App.css";

export default function ContactUs() {
    return (
                <section className="wrapper">
                      <div className="box">
                            <h1>Contact Us</h1>
                     <div className="projects">
                            <div  className="content-contact">
                                <div  className="text">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, magni nesciunt? Doloribus hic consequuntur a aut inventore quod, sequi quaerat corporis ad beatae perferendis, architecto voluptas sint. Earum inventore exercitationem ut optio odio
                                    expedita fugiat, suscipit odit animi nequus?
                                </div>
                                <div  className="inputs">
                                        <img src="https://image.freepik.com/free-vector/recruitment-team-isometric-illustration-employers-candidates-3d-cartoon-characters-human-resources-management-hr-team-managers-studying-cv-recruiter-with-loudspeaker-job-search_276875-193.jpg" alt="" />
                                    <div className="form">
                                    <form action="/">
                                        <div  className="data">
                                            <div  className="input-box">
                                                <div  className="text" data-aos="fade-down">
                                                    Name*:
                                                </div>
                                                <div  className="input" data-aos="fade-down">
                                                    <input type="text" required  className="input-data da" name="Name" id="" />
                                                </div>
                                            </div>

                                            <div  className="input-box">
                                                <div  className="text" data-aos="fade-down">
                                                    E-mail*:
                                                </div>
                                                <div  className="input" data-aos="fade-down">
                                                    <input type="email" required  className="input-data da" name="Name" id="" />
                                                </div>
                                            </div>

                                            <div  className="input-box">
                                                <div  className="text" data-aos="fade-down">
                                                    Mobile No. :
                                                </div>
                                                <div  className="input" data-aos="fade-down">
                                                    <input type="number"  className="input-data da" name="Name" id="" />
                                                </div>
                                            </div>

                                            <div  className="input-box">
                                                <div  className="text" data-aos="fade-down">
                                                    Message*:
                                                </div>
                                                <div  className="input" data-aos="fade-down">
                                                    <textarea name="" required  className="input-data" id="" cols="30" rows="10"></textarea>
                                                </div>
                                            </div>
                                            <div  className="btn">
                                                <input type="submit" data-aos="fade-down"  className="btn-sub" value="Submit" />
                                            </div>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
    )
}
