import React from 'react'
import "../App.css";

export default function joinUs() {
    return (
            <body>
                <section className="wrapper">
                      <div className="box">
                            <h1>Join Us - Become a partner </h1>
                     <div className="projects">
                            <div  className="content-contact">
                                <div  className="text">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, magni nesciunt? Doloribus hic consequuntur a aut inventore quod, sequi quaerat corporis ad beatae perferendis, architecto voluptas sint. Earum inventore exercitationem ut optio odio
                                    expedita fugiat, suscipit odit animi nequus?
                                </div>
                                <div  className="inputs">
                                        <img src="https://image.freepik.com/free-vector/organic-flat-join-us-concept_23-2148948357.jpg" alt="" />
                                    <div className="form">
                                    <form action="/">
                                    <h4>Fill the form to become a partner  </h4>
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
                                                    Proffesional Skill's :
                                                </div>
                                                <div  className="input" data-aos="fade-down">
                                                    <select name="" className="input-data da" id="">
                                                        <option value="">--Select--</option>
                                                        <option value="">Web Developer</option>
                                                        <option value="">Graphics Designing</option>
                                                        <option value="">UI/UX Designing</option>
                                                        <option value="">Software Developer</option>
                                                    </select>
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
            </body>
    )
}
