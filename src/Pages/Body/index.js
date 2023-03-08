import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";

import Dashboard from "./Dashboard";
import Profile from "./Profile";
import BackPage from "../../Components/Common/BackPage";
import Search from "./Search";

function Body({ logout }) {
  return (
    <Router>
      <Sidebar />
      <div className=" sm:ml-64 ">
        <Navbar logout={logout} back={<BackPage />} />
        <div className="  ">
          <div className=" bg-gradient-to-b from-gray-700 via-gray-900 to-black ">
            <div className="   ">
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/user" component={Profile}></Route>
                <Route path="/search" component={Search}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default Body;
