import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../Lib/fetchApi";
import { setProfile } from "../../../Store/profile";
import User from "../../../Components/Profile/User";

function Profile() {
  const dispatch = useDispatch();
  let { isAuthorized } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);

  useEffect(() => {
    getProfile(isAuthorized).then((data) => {
      dispatch(setProfile(data));
    });
  }, [dispatch, isAuthorized]);

  return (
    <div className="h-screen">
      <User name={profile?.display_name} imgUser={profile.images?.[0].url} />
    </div>
  );
}

export default Profile;
