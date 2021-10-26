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

    // delete Blogs  data
    const deleteBlog = async (id) => {
      // API Call
      const response = await fetch(`${host}/api/createPost/deleteBlog/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newBlog = blogs.filter((props) => {
        return props._id !== id;
      });
      setBlogs(newBlog);
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
  const countblogsInitial = [0];
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
  // Counts Contact Us data
  const countContactInitial = [0];
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

  //fetch All connects Us data
  const connectInitial = [];
  const [connect, setConnect] = useState(connectInitial);
  const getConnect = async () => {
    const res = await fetch(`${host}/api/connect-us-routes/fetchAllConnect`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();
    setConnect(json);
  };
  // Counts Connect Us data
  const countConnectInitial = [0];
  const [countConnect, setCountConnect] = useState(countConnectInitial);

  const getCountConnect = async () => {
    const res = await fetch(`${host}/api/connect-us-routes/connectCounts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();
    setCountConnect(json);
  };

  // delete connects us data
  const deleteConnect = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/connect-us-routes/deleteConnect/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newConnect = connect.filter((props) => {
      return props._id !== id;
    });
    setConnect(newConnect);
  };

  return (
    <ContactContext.Provider
      value={{
        blogs,
        getBlog,
        addContact,
        getCountBlog,
        countBlogs,
        getCountConnect,
        countConnect,
        getCountContact,
        countContact,
        connect,
        getConnect,
        deleteConnect,
        deleteBlog
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
