import { useState } from "react/cjs/react.development";
import ContactContext from "./contactContext";

const ContactState = (props) => {
  // fetch all blog data
  const blogsInitial = [];
  const [blogs, setBlogs] = useState(blogsInitial);

  const host = "http://localhost:5000";
  const getBlog = async () => {
    const res = await fetch(`${host}/api/createPost/fetchAllBlog`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();
    console.log(json);
    setBlogs(json);
  };

  // Add contacts data into database
  const addContact = async (name, email, number, message) => {
    const host = "http://localhost:5000";
    const res = await fetch(`${host}/api/user_routes/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        number,
        message,
      }),
    });
    const data = await res.json();
    if (res.status === 500 || !data) {
      window.alert("Invalid registration");
    } else {
      window.alert("registration Successfull");
    }
  };

  // Counts blog data
  const countblogsInitial = [];
  const [countBlogs, setCountBlogs] = useState(countblogsInitial);
  const getCountBlog = async () => {
    const res = await fetch(`${host}/api/createPost/countAllBlog`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();
    console.log(json);
    setCountBlogs(json);
  };

    // Counts Connect Us data
    const countConnectInitial = [];
    const [countConnect, setCountConnect] = useState(countConnectInitial);
  
    const getCountConnect = async () => {
      const res = await fetch(`${host}/api/connect-us-routes/connectCounts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      console.log(json);
      setCountConnect(json);
    };

    // Counts Contact Us data
    const countContactInitial = [];
    const [countContact, setCountContact] = useState(countContactInitial);
  
    const getCountContact = async () => {
      const res = await fetch(`${host}/api/user_routes/countContact`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      console.log(json);
      setCountContact(json);
    };

  return (
    <ContactContext.Provider value={{ blogs, getBlog, addContact ,getCountBlog,countBlogs,getCountConnect,countConnect,getCountContact,countContact}}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
