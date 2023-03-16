import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylist, getProfile, getTopArtists } from "../../../Lib/fetchApi";
import { setProfile } from "../../../Store/profile";
import User from "../../../Components/Profile/User";
import TopArtists from "../../../Components/Profile/TopArtists";
import PlayList from "../../../Components/Profile/PlayList";
import { setTopArtists } from "../../../Store/topartists";

import { setPlaylist } from "../../../Store/playlist";

function Profile() {
  const dispatch = useDispatch();
  let { isAuthorized } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);
  const { topartists } = useSelector((state) => state.topartists);
  const { playlist } = useSelector((state) => state.playlist);

  useEffect(() => {
    getProfile(isAuthorized).then((data) => {
      dispatch(setProfile(data));
    });

    getTopArtists(isAuthorized).then((data) => {
      dispatch(setTopArtists(data));
    });

    getPlaylist(isAuthorized).then((data) => {
      dispatch(setPlaylist(data));
    });
  }, [dispatch, isAuthorized]);

  return (
    <div className=" pb-32">
      <User
        totalplaylist={playlist.length}
        name={profile?.display_name}
        imgUser={profile.images?.[0].url}
      />
      <div className="px-8 py-4">
        <h1 className="text-3xl font-bold ">Top artists this month</h1>
        <p className="text-standart">Only visible to you</p>
        <div className="mx-auto overflow-hidden">
          <div className="grid grid-cols-2  md:grid-cols-6 gap-4 shadow-md py-4">
            {topartists.length ? (
              topartists.slice(0, 6).map((item, idx) => {
                return (
                  <TopArtists
                    key={idx}
                    images={item?.images?.[0].url}
                    name={item?.name}
                    type={item.type}
                  />
                );
              })
            ) : (
              <h1>Top Artists is Null</h1>
            )}
          </div>
        </div>
      </div>

      <div className="px-8 py-4">
        <h1 className="text-3xl font-bold ">Public Playlist</h1>
        <div className="mx-auto overflow-hidden">
          <div className="grid grid-cols-2  md:grid-cols-6 gap-4 shadow-md py-4 overflow-y-auto  ...">
            {playlist.length
              ? playlist.slice(0, 6).map((item, idx) => {
                  return (
                    <PlayList
                      key={idx}
                      images={item.images?.[0]?.url}
                      name={item?.name}
                    />
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
