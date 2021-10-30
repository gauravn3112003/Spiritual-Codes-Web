import React from "react";
import "./Styling/ConnectUs.css";

export default function ContactUsData() {
  return (
    <>
      <div className="dash-head">
        <div className="text">
          Contact Us
        </div>
        <div className="search">
          <input type="search" placeholder="Search By name"  name="" id="" />
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
          <tr>
            <td>1</td>
            <td>Gaurav Narnaware</td>
            <td>8805950201</td>
            <td>gauravnarnaware31120032gmail.com</td>
            <td>hey everyone</td>
            <td className="operations">
                <div className="delete">
                <i class="bi bi-trash"></i>
                </div>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
