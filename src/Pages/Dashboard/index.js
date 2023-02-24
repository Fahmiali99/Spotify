import React from "react";

import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import Body from "./Body";

function Dashboard({ logout }) {
  return (
    <div className=" ">
      <div className="">
        <Sidebar />
        <div className=" sm:ml-64 ">
          <Navbar logout={logout} />
          <Body />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
