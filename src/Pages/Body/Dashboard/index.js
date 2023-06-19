import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedPlaylist } from "../../../Lib/fetchApi";
import CoverPage from "../../../Components/Dashboard/CoverPage";
import SongsPage from "../../../Components/Dashboard/SongsPage";
import { setSongId } from "../../../Store/songId";

function Dashboard() {
  const dispatch = useDispatch();
  let { isAuthorized } = useSelector((state) => state.auth);
  const { song } = useSelector((state) => state.songId);

  useEffect(() => {
    getSelectedPlaylist(isAuthorized).then((data) => {
      dispatch(setSongId(data));
    });
  }, [dispatch, isAuthorized]);

  return (
    <div className=" px-8 pt-32 pb-32  overflow-y-scroll h-screen">
      <CoverPage
        image={song.images?.[0].url}
        name={song.name}
        description={song.description}
      />

      <SongsPage song={song.tracks?.items} link={song.external_urls?.spotify} />
    </div>
  );
}

export default Dashboard;
