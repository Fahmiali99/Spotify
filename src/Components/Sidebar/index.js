import React, { useEffect } from "react";
import { sidebar } from "../../Utils/sidebar";
import Fitur from "./Detail/Fitur";
import Playlist from "./Detail/Playlist";
import { useDispatch, useSelector } from "react-redux";
import { setPlaylist } from "../../Store/playlist";
import { SELECTED_PLAYLIST } from "../../Config/urlApi";
import axios from "axios";
import { getPlaylist } from "../../Lib/fetchApi";
// import { getPlaylist } from "../../Lib/fetchApi";

function Sidebar() {
  const dispatch = useDispatch();
  let { isAuthorized } = useSelector((state) => state.auth);
  const { playlist } = useSelector((state) => state.playlist);

  useEffect(() => {
    getPlaylist(isAuthorized).then((data) => {
      dispatch(setPlaylist(data));
    });
  }, [dispatch, isAuthorized]);

  return (
    <div>
      <aside
        id="separator-sidebar"
        className="fixed z-0 top-0 left-0  w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-4 py-4 overflow-y-auto bg-darks text-white ">
          <div className="p-2 pb-5">
            <img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
              alt=""
              width={130}
            />
          </div>
          {sidebar.map((item, idx) => (
            <Fitur
              key={idx}
              href={item.href}
              Icons={item.Icons}
              title={item.title}
            />
          ))}

          <ul className="pt-4 mt-4 space-y-2 border-t border-linese">
            {playlist.length ? (
              playlist.map((item, idx) => (
                <Playlist key={idx} title={item.name} />
              ))
            ) : (
              <h1 className=" text-2xl font-medium pt-6 mb-2">
                You not have playlist
              </h1>
            )}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
