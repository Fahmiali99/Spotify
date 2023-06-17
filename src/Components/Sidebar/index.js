import React, { useEffect } from "react";

import Fitur from "./Detail/Fitur";
import Playlist from "./Detail/Playlist";
import { useDispatch, useSelector } from "react-redux";
import { setPlaylist } from "../../Store/playlist";
import { getPlaylist } from "../../Lib/fetchApi";

function Sidebar() {
  const dispatch = useDispatch();
  let { isAuthorized } = useSelector((state) => state.auth);
  const { playlist } = useSelector((state) => state.playlist);

  useEffect(() => {
    const interval = setInterval(() => {
      getPlaylist(isAuthorized).then((data) => {
        dispatch(setPlaylist(data));
      });
    }, 360);
    return () => clearInterval(interval);
  }, [dispatch, isAuthorized]);

  return (
    <div>
      <aside
        id="separator-sidebar"
        className="fixed z-0 top-0 left-0  w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-4 py-4  bg-darks text-white ">
          <div className="p-2 pb-5">
            <img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
              alt=""
              width={130}
            />
          </div>

          <Fitur />

          <ul className="pt-4 mt-4 space-y-2 border-t border-linese hover:overflow-y-auto  h-3/5 ...">
            {playlist.length ? (
              playlist.map((item, idx) => (
                <Playlist key={idx} title={item.name} />
              ))
            ) : (
              <h1 className=" text-xl font-medium pt-6 mb-2">
                You don't have playlists
              </h1>
            )}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
