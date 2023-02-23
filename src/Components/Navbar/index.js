import React from "react";
import { BsSearch } from "react-icons/bs";
import Profile from "./Detail/Profile";

function Navbar({ logout }) {
  return (
    <div>
      <div className="text-white bg-gray-800 z-20 fixed  w-full px-8 pt-6 pb-6 flex justify-between ">
        <div>
          <form>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BsSearch className=" text-xl text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-3 w-80 pl-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full"
                placeholder="Apa yang ingin kamu dengarkan?"
                required
              />
            </div>
          </form>
        </div>
        <div className=" sm:mr-64 flex items-center">
          <div className="flex justify-items-center items-center  px-1 py-1 rounded-full sm:mr-4">
            <Profile logout={logout} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;