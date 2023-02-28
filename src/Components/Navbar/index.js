import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Profile from "./Detail/Profile";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../Lib/fetchApi";
import { setProfile } from "../../Store/profile";

function Navbar({ logout, back }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  let { isAuthorized } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);

  useEffect(() => {
    getProfile(isAuthorized).then((data) => {
      dispatch(setProfile(data));
    });
  }, [dispatch, isAuthorized]);

  function toggleProfile() {
    setOpen(!open);
  }
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownRef]);

  function goToProfile() {
    history.push("/profile");
  }

  return (
    <div className="text-white bg-gray-800 z-20 fixed  w-full px-8 pt-6 pb-6 flex justify-between ">
      <div className="flex items-center">
        {back}
        <form className="pl-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BsSearch className=" text-lg text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block py-2.5 w-80 pl-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full"
              placeholder="Apa yang ingin kamu dengarkan?"
              required
            />
          </div>
        </form>
      </div>

      <div className=" sm:mr-64 flex items-center">
        <div className="flex justify-items-center items-center  px-1 py-1 rounded-full sm:mr-4">
          <Profile
            logout={logout}
            country={profile.country}
            name={profile?.display_name}
            imgUser={profile.images?.[0].url}
            email={profile.email}
            toggleProfile={toggleProfile}
            goToProfile={goToProfile}
            open={open}
            dropdownRef={dropdownRef}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
