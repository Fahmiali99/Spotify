import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Profile from "./Detail/Profile";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../Lib/fetchApi";
import { setProfile } from "../../Store/profile";

function Navbar({ logout, back, search }) {
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
    history.push(`/user/${profile.id}`);
  }

  return (
    <div className="text-white bg-gray-800 z-20 fixed  w-full px-8 pt-6 pb-6 flex justify-between ">
      <div className="flex items-center">
        {back}
        {search}
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
