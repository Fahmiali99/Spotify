import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function Profile({ logout, name, imgUser, email, country }) {
  const [open, setOpen] = useState(false);
  function toggleProfile() {
    setOpen(!open);
  }

  return (
    <div className=" w-44 ">
      <div>
        <div className="flex items-center justify-end md:order-2 ">
          <button
            type="button"
            onClick={toggleProfile}
            className=" flex   items-center mr-3 text-sm bg-darks rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>

            <img
              className="w-8 h-8 rounded-full m-1"
              src={imgUser}
              alt="fahmi"
            />

            <h1 className="ml-2">{name}</h1>
            <IoMdArrowDropdown className="text-xl ml-1 mr-3" />
          </button>
        </div>
        <div className="relative flex justify-end">
          <div
            className={`z-50  fixed    my-3 text-base list-none bg-darks divide-gray-700  divide-y rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
              open ? "block" : "hidden"
            }`}
            id="user-dropdown"
          >
            {open && (
              <>
                <div className="px-4 py-3 text-white">
                  <span className="block text-sm  dark:text-white">
                    {country}
                  </span>
                  <span className="block text-sm font-medium  truncate dark:text-gray-400">
                    {email}
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li className="block  px-4 text-sm  hover:bg-gray-900 dark:text-gray-200 dark:hover:text-white">
                    <button onClick={logout} className="pr-20 py-2 ">
                      Logout
                    </button>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
