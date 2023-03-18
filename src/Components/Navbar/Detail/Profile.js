import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiLinkExternal } from "react-icons/bi";

function Profile({
  logout,
  name,
  imgUser,
  email,
  country,
  toggleProfile,
  goToProfile,
  open,
  dropdownRef,
  goToAkun,
}) {
  const data = [
    {
      title: "Akun",
      Icons: BiLinkExternal,
      link: goToAkun,
    },
    {
      title: "Profile",
      Icons: BiLinkExternal,
      link: goToProfile,
    },
    {
      title: "Logout",
      Icons: null,
      link: logout,
    },
  ];
  return (
    <div className=" w-44 ">
      <div className="flex items-center justify-end md:order-2 ">
        <button
          type="button"
          onClick={toggleProfile}
          className=" flex items-center mr-3 text-sm bg-Gstandart rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open user menu</span>

          <img className="w-8 h-8 rounded-full m-1" src={imgUser} alt="fahmi" />

          <h1 className="ml-2">{name}</h1>
          <IoMdArrowDropdown className="text-xl ml-1 mr-3" />
        </button>
      </div>
      <div className="relative flex justify-end" ref={dropdownRef}>
        <div
          className={`z-50  fixed    my-3 text-base list-none bg-Gstandart divide-gray-700  divide-y rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
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
                {data.map((item, idx) => (
                  <li
                    key={idx}
                    className="block text-sm  hover:bg-HGstandar dark:text-gray-200 dark:hover:text-white"
                  >
                    <button
                      type="button"
                      onClick={item.link}
                      className="flex items-center justify-between text-sm  w-full px-4 py-2 "
                    >
                      {item.title}
                      {item.Icons ? <item.Icons className="text-lg" /> : null}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
