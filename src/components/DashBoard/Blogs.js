import React, { useEffect, useContext } from 'react'
import contactContext from '../../Context/Contact/contactContext';
import Blog from "./Blog";

import "./Styling/ConnectUs.css";

export default function ContactUsData() {

    function bcard(val) {
        return (
          <Blog
            image={val.image}
            head={val.title}
            date={val.date}
            _id={val._id}
            key={val._id}
          />
        );
      }

      const context = useContext(contactContext);
      const {blogs,getBlog} = context;
      useEffect(()=>{
        getBlog();
      },[])
     

  return (
    <>
      <div className="table">
        {blogs.map(bcard)}
      </div>
    </>
  );
}
