import React from "react";
import ConnectUsData from "./ConnectUsData";
import ContactUsData from "./ContactUsData";
import "./Styling/Dashboard.css";
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideNav from "./SideNav";
import TopDash from "./TopDash";
import CreatePost from "./CreatePost";
import AllBlogs from "./AllBlogs";
export default function Dashboard() {
  return (
    <>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
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
                <Route path="/Dashboard/AllBlogs">
                  <AllBlogs/>
                </Route>
              </Switch>
            </div>
          </div>
        </section>
      </Router>
    </>
  );
}

