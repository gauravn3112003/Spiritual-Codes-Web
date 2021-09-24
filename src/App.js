
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Services from "./components/Services";
import Footer from "./components/Footer";
import JoinUs from "./components/JoinUs";
import About from "./components/About";
import AdsComponents from "./components/AdsComponents";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";



function App() {
  return (
      <>
   <Router>
   <Navbar/>
    <Switch>
          <Route path="/ContactUs">
            <ContactUs/>
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/Services">
            <Services />
          </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/JoinUs">
             <JoinUs/>
          </Route>
          <Route path="/">
             <Home/>
          </Route>
    </Switch>
    <AdsComponents/>
    <Footer/>
   </Router>
   </>
  );
}

export default App;
