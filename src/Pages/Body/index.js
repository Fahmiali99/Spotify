import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";

import Dashboard from "./Dashboard";
import Profile from "./Profile";
import BackPage from "../../Components/Common/BackPage";

function Body({ logout }) {
  return (
    <Router>
      <Sidebar />
      <div className=" sm:ml-64 ">
        <Navbar logout={logout} back={<BackPage />} />
        <div className=" bg-gradient-to-b from-gray-700 via-gray-900 to-black">
          <div className="  h-screen">
            <div className=" px-8 pt-32 pb-32  overflow-y-scroll h-screen  ">
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/profile" component={Profile}></Route>
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
