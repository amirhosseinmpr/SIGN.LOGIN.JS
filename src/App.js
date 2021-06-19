import "./App.css";
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/components/pages/Home";
import Services from "../src/components/pages/Services";
import products from "./components/pages/products";

import { useState, useEffect } from "react";
import SignUp from "./components/pages/SignUp";
function App() {
  const [navbarColor, setNavbarColor] = useState("#171717");

  return (
    <>
      <Router>
        <Navbar bgColor={navbarColor} />
        <Switch>
          <Route
            path="/"
            exact
            component={(props) => (
              <Home {...props} setNavbarColor={setNavbarColor} />
            )}
          />
          <Route
            path="/services"
            exact
            component={(props) => (
              <Services {...props} setNavbarColor={setNavbarColor} />
            )}
          />
          <Route
            path="/products"
            exact
            component={(props) => (
              <products {...props} setNavbarColor={setNavbarColor} />
            )}
          />
          <Route
            path="/sign-up"
            component={(props) => (
              <SignUp {...props} setNavbarColor={setNavbarColor} />
            )}
          />
        </Switch>
      </Router>

      <div className="app">
        <switch></switch>
      </div>
    </>
  );
}

export default App;
