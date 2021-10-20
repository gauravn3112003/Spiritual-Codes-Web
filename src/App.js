import LoginAdmin from "./Pages/LoginAdmin";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import JoinUs from "./Pages/JoinUs";
import Services from "./Pages/Services";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdsComponents from "./components/AdsComponents";
import ContactState from "./Context/Contact/ContactState";
import ErrorPage from "./components/ErrorPage";
import Dashboard from "./components/DashBoard/Dashboard";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ContactState>
        <Router>
          <Navbar />
          <Switch>
          <Route path="/LoginAdmin">
              <LoginAdmin/>
            </Route>
            <Route path="/ContactUs">
              <ContactUs />
            </Route>
            <Route path="/Blog">
              <Blog />
            </Route>
            <Route path="/Services">
              <Services />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/JoinUs">
              <JoinUs />
            </Route>
            <Route path="/Dashboard">
              <Dashboard/>
            </Route>
            <Route exact path="/" component={Home} />
          <Route component={ErrorPage} />
          </Switch>
          <AdsComponents />
          <Footer />
        </Router>
      </ContactState>
    </>
  );
}

export default App;
