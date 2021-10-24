import React, { useEffect, useState, useContext } from "react";
import contactContext from "../../Context/Contact/contactContext";
// import { Link } from "react-router-dom";
import DashBox from "./DashBox";
export default function TopDash() {

  const context = useContext(contactContext);
  const { countBlogs, getCountBlog,getCountConnect,countConnect,getCountContact,countContact } = context;
  useEffect(() => {
    getCountBlog();
  }, []);
  useEffect(() => {
    getCountConnect();
  }, []);
  useEffect(() => {
    getCountContact();
  }, []);
  return (
    <>
    <div className="top-dash">
      <DashBox count={countBlogs} title="Total" location="/" btn="Blogs" />
      <DashBox count={countConnect} title="Total" location="/Dashboard/ConnectUsData" btn="Connect Us" />
      <DashBox count={countBlogs} title="Total" location="/" btn="Join Us" />
      <DashBox count={countContact} title="Total" location="/Dashboard/ContactUsData" btn="Contact Us" />
      </div>
    </>
  );
}
