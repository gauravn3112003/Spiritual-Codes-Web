import { useState } from "react/cjs/react.development";
import ContactContext from "./contactContext";

const ContactState = (props) => {
  const host = "http://localhost:5000";

  // fetch all blog data
  const blogsInitial = [];
  const [blogs, setBlogs] = useState(blogsInitial);
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
    // console.log(json);
    setCountBlogs(json);
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
  // fetch all Contact Us data
  const contactInitial = [];
  const [fetchContact, setFetchContact] = useState(contactInitial);

  const getContacts = async () => {
    const res = await fetch(`${host}/api/user_routes/fetchAllContactUs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();
    console.log(json);
    setFetchContact(json);
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

  // delete Contact us data
  const deleteContact = async (id) => {
    // API Call
    const response = await fetch(
      `${host}/api/user_routes/deleteContact/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const newContact = fetchContact.filter((props) => {
      return props._id !== id;
    });
    setFetchContact(newContact);
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
    const response = await fetch(
      `${host}/api/connect-us-routes/deleteConnect/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const newConnect = connect.filter((props) => {
      return props._id !== id;
    });
    setConnect(newConnect);
  };

  // fetch single blog  data
  const blogsDataInitial = [];
  const [BlogData, setBlogData] = useState(blogsDataInitial);
    const getBlogData = async (id) => {
        const res = await fetch(`${host}/api/createPost/blogPost/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await res.json();
        // console.log(json);
        setBlogData(json);
    };











  return (
    <ContactContext.Provider
      value={{
        blogs,
        getBlog,
        deleteBlog,
        countBlogs,
        setCountBlogs,
        getCountBlog,
        getBlogData,
        BlogData,

        fetchContact,
        getCountContact,
        countContact,
        setCountContact,
        getContacts,
        deleteContact,
        addContact,

        connect,
        getCountConnect,
        countConnect,
        setCountConnect,
        getConnect,
        deleteConnect,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
