import React, { useEffect,useState, useContext } from 'react'
import contactContext from "../Context/Contact/contactContext";
import BlogCard from "./BlogCard";
import "../App.css";
import Spinner from './Spinner';



  
export default function BlogAllCardData() {
  function bcard(val) {
    return (
      <BlogCard
        image={val.image}
        tag={val.tag}
        head={val.title}
        descri={val.description}
        date={val.date}
        id={val._id}
        key={val._id}
      />
    );
  }

  const context = useContext(contactContext);
  const {blogs,getBlog} = context;
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    getBlog();
    setLoading(true);
  },[])
 
    return (
        <>
        {loading?blogs.map(bcard):<Spinner/>}
        
        </>
    )
}
