import { useState } from "react/cjs/react.development";
import ContactContext from "./contactContext";

const ContactState = (props)=>{

    // fetch all blog data

    const blogsInitial =[];
    const [blogs, setBlogs] = useState(blogsInitial);
    
    const host = "http://localhost:5000";
    const getBlog = async () => {
      const res = await fetch(`${host}/api/createPost/fetchAllBlog`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        },
      })
      const json = await res.json();
      console.log(json);
      setBlogs(json)
    };

    return(
        <ContactContext.Provider value={{blogs,getBlog}} >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;