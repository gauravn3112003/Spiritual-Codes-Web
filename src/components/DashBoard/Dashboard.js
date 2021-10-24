import React from "react";
import ConnectUsData from "./ConnectUsData";
import ContactUsData from "./ContactUsData";
import "./Styling/Dashboard.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideNav from "./SideNav";
import TopDash from "./TopDash";
import CreatePost from "./CreatePost";
export default function Dashboard() {
  return (
    <>
      <Router>
        <section className="dashboard-home">
          <SideNav />
          <div className="dashboard">
            <TopDash/>
            <div className="bottom">
              <Switch>
                <Route path="/Dashboard/ConnectUsData">
                  <ConnectUsData />
                </Route>
                <Route path="/Dashboard/ContactUsData">
                  <ContactUsData />
                </Route>
                <Route path="/Dashboard/CreatePost">
                  <CreatePost/>
                </Route>
              </Switch>
            </div>
          </div>
        </section>
      </Router>
    </>
  );
}
