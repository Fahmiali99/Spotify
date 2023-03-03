import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, getTopArtists } from "../../../Lib/fetchApi";
import { setProfile } from "../../../Store/profile";
import User from "../../../Components/Profile/User";
import TopArtists from "../../../Components/Profile/TopArtists";
import PlayList from "../../../Components/Profile/PlayList";
import { setTopArtists } from "../../../Store/topartists";

function Profile() {
  const dispatch = useDispatch();
  let { isAuthorized } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);
  const { topartists } = useSelector((state) => state.topartists);

  useEffect(() => {
    getProfile(isAuthorized).then((data) => {
      dispatch(setProfile(data));
    });
  }, [dispatch, isAuthorized]);

  useEffect(() => {
    getTopArtists(isAuthorized).then((data) => {
      dispatch(setTopArtists(data));
    });
  }, [dispatch, isAuthorized]);

  return (
    <div className="h-screen">
      <User name={profile?.display_name} imgUser={profile.images?.[0].url} />
      <div className="grid grid-cols-5 gap-4 bg-darks rounded-lg shadow-md">
        {topartists.length
          ? topartists.map((item, idx) => (
              <TopArtists
                key={idx}
                images={item?.images?.[1].url}
                name={item?.name}
                type={item.type}
              />
            ))
          : ""}
      </div>
      <PlayList />
    </div>
  );
}

export default Profile;
