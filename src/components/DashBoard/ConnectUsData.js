import React, { useEffect, useContext } from "react";
import ConnectUs from "./ConnectUs";
import contactContext from "../../Context/Contact/contactContext";
import "./Styling/ConnectUs.css";
export default function ConnectUsData() {
  function connectUs(val) {
    return (
      <ConnectUs
        email={val.email}
        date={val.date}
        _id={val._id}
        key={val._id}
      />
    );
  }
  const context = useContext(contactContext);
  const { connect, getConnect } = context;
  useEffect(() => {
    getConnect();
  }, []);
  return (
    <>
      <div className="dash-head">
        <div className="text">Connect Us</div>
        <div className="search">
          <input type="search" placeholder="Search By name" name="" id="" />
        </div>
      </div>
      <div className="table">{connect.map(connectUs)}</div>
    </>
  );
}
