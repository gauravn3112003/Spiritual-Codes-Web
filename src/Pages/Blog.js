import React from "react";
import "../App.css";
import BlogAllCardData from "../components/BlogAllCardData";
import SidbarBlog from "../components/SidbarBlog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogScreen from "../components/BlogScreen";

import {Helmet} from "react-helmet";

export default function Blog() {
  return (
    <>
      <Router>
      <Helmet>
        <title>Blogs || Spiritual Codes</title>
      </Helmet>
        <section className="wrapper">
          <div className="box">
            <h1>Blog's</h1>
            <div className="blogbox">
            <div className="blogLeft">
              <Switch>
                <Route path="/Blog/:head/:id" render={props =>(

                  <BlogScreen {...props} />
                )} >
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
