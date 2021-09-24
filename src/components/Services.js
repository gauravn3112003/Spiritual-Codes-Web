import React from 'react'
import ServiceCard from './ServiceCard';
import "../App.css";
export default function Services() {
    return (
            <section className="wrapper">
                <div className="box">
                    <h1>Services</h1>
                    <div className="projects">
                        <ServiceCard  skill="Web Development" image="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__340.jpg" />

                        <ServiceCard skill="SEO Management" image="https://cdn.pixabay.com/photo/2015/08/19/15/44/seo-896175__340.png" />
                     
                        <ServiceCard skill="Graphics Designing" image="https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766__340.png" />
                     
                        <ServiceCard skill="Content Creater" image="https://cdn.pixabay.com/photo/2017/12/11/23/52/coding-3013602__340.jpg" />

                        <ServiceCard skill="Video Editing" image="https://cdn.pixabay.com/photo/2019/11/14/10/23/artificial-intelligence-4625878__340.jpg" />

                        <ServiceCard skill="App Development" image="https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926__340.jpg" />

                        <ServiceCard skill="Bug Development" image="https://cdn.pixabay.com/photo/2016/01/19/14/47/laptop-1148958__340.jpg"  />

                        <ServiceCard skill="Artificial Intelligents"image="https://cdn.pixabay.com/photo/2020/01/02/17/19/artificial-intelligence-4736369__340.jpg" 
                        />

                        <ServiceCard skill="Software Development" image="https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737__340.png" />
                    </div>
                </div>
            </section>
    )
}
