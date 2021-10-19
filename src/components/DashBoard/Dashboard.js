import React from "react";
import ConnectUsData from "./ConnectUsData";
import ContactUsData from "./ContactUsData";
import "./Styling/Dashboard.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <>
      <Router>
        <div className="dashboard">
          <div className="top-dash">
            <div className="dash-box">
              <div className="number">35</div>
              <div className="right-dash">
                <div className="name">Post</div>
                <div className="button">
                  <a href="/">Create Post</a>
                </div>
              </div>
            </div>
            <div className="dash-box">
              <div className="number">55</div>
              <div className="right-dash">
                <div className="name">Connect Us</div>
                <div className="button">
                  <Link to="/Dashboard/ConnectUsData">View More</Link>
                </div>
              </div>
            </div>
            <div className="dash-box">
              <div className="number">20</div>
              <div className="right-dash">
                <div className="name">Contact Us</div>
                <div className="button">
                  <Link to="/Dashboard/ContactUsData">View Now</Link>
                </div>
              </div>
            </div>
            <div className="dash-box">
              <div className="number">05</div>
              <div className="right-dash">
                <div className="name">Join Us</div>
                <div className="button">
                  <a href="/">View Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <Switch>
              <Route path="/Dashboard/ConnectUsData">
                <ConnectUsData />
              </Route>
              <Route path="/Dashboard/ContactUsData">
                <ContactUsData />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}
