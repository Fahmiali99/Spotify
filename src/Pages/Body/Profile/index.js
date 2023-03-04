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
    <div className=" pb-60">
      <User name={profile?.display_name} imgUser={profile.images?.[0].url} />
      <div className="px-8 py-4">
        <h1 className="text-3xl font-bold ">Top artists this month</h1>
        <p className="text-standart">Only visible to you</p>
        <div className="mx-auto overflow-hidden">
          <div className="grid grid-cols-2  md:grid-cols-6 gap-4 shadow-md py-4">
            {topartists.length ? (
              topartists
                .slice(0, 6)
                .map((item, idx) => (
                  <TopArtists
                    key={idx}
                    images={item?.images?.[0].url}
                    name={item?.name}
                    type={item.type}
                  />
                ))
            ) : (
              <h1>Top Artists is Null</h1>
            )}
          </div>
        </div>
      </div>
      <PlayList />
    </div>
  );
}

export default Profile;
