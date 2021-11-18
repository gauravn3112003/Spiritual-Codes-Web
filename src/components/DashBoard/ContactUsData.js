import React, { useEffect, useContext } from "react";
import "./Styling/ConnectUs.css";
import contactContext from "../../Context/Contact/contactContext";
import ContactUs from "./ContactUs";

export default function ContactUsData() {
  function contactUs(val) {
    return (
      <ContactUs
        name={val.name}
        email={val.email}
        number={val.number}
        message={val.message}
        _id={val._id}
        key={val._id}
      />
    );
  }

  const context = useContext(contactContext);
  const { fetchContact, getContacts } = context;
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <div className="dash-head">
        <div className="text">Contact Us</div>
        <div className="search">
          <input type="search" placeholder="Search By name" name="" id="" />
        </div>
      </div>
      <div className="table">
        <table>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Number</th>
            <th>gmail</th>
            <th>message</th>
            <th>Operation</th>
          </tr>
          {fetchContact.map(contactUs)}
        </table>
      </div>
    </>
  );
}
