import React from 'react'
import "../App.css";
export default function ServiceCard(props) {
    return (
        <div className="content">
                <div className="image">
                    <img src= {props.image}alt="" />
                </div>
                <div className="about">
                    <div className="skill">
                        {props.skill}
                    </div>
                    <div className="sub-skill">
                        (Spiritual_codes)
                    </div>
                </div>
                <div className="content-1">
                    <div className="skill">
                          {props.skill}
                    </div>
                    <div className="sub-skill">
                        (Spiritual_codes)
                    </div>
                    <div className="bottom">
                        <div className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat ratione ex rem quo magnam!
                        </div>
                        <div className="btn">
                            <a href="/">About More</a>
                        </div>
                    </div>

                </div>
            </div>
    )
}
