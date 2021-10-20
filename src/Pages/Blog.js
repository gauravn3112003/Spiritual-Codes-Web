import React from "react";
import "../App.css";
import BlogAllCardData from "../components/BlogAllCardData";
import SidbarBlog from "../components/SidbarBlog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogScreen from "../components/BlogScreen";

export default function Blog() {
  return (
    <>
      <Router>
        <section className="wrapper">
          <div className="box">
            <h1>Blog's</h1>
            <div className="blogbox">
            <div className="blogLeft">
              <Switch>
                <Route path="/Blog/BlogOpen">
                  <BlogScreen/>
                </Route>
                <Route path="/">
                  <BlogAllCardData />
                </Route>
              </Switch>
              </div>
              <SidbarBlog />
            </div>
          </div>
        </section>
      </Router>

      {/* <section className="wrapper">
        <div className="box">
          <h1>Blog's</h1>
          <div className="blogbox">
            <BlogAllCardData />
            <SidbarBlog />
          </div>
        </div>
      </section> */}
    </>
  );
}
