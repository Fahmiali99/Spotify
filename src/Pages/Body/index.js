import React from "react";

import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";

import { Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import Dashboard from "./Dashboard";

function Body({ logout }) {
  return (
    <div className=" ">
      <div className="">
        <Sidebar />
        <div className=" sm:ml-64 ">
          <Navbar logout={logout} />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Body;
