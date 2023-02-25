import React, { useEffect } from "react";
import CurrentPlaying from "./Detail/CurrentPlaying";
import PlayControl from "./Detail/PlayControl";
import VolumControl from "./Detail/VolumControl";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPlaying } from "../../Lib/fetchApi";
import { setCurrentPlay } from "../../Store/currentplay";

function Footer() {
  const dispatch = useDispatch();
  let { isAuthorized } = useSelector((state) => state.auth);
  const { currentplay } = useSelector((state) => state.currentplay);

  useEffect(() => {
    getCurrentPlaying(isAuthorized).then((data) => {
      dispatch(setCurrentPlay(data));
    });
  }, [dispatch, isAuthorized]);
  return (
    <div className="px-4 py-4 border-t border-linese bg-play fixed bottom-0 w-full z-20 flex justify-between items-center text-white">
      <CurrentPlaying
        images={currentplay?.album?.images?.[2].url}
        name={currentplay?.name}
        artists={currentplay?.artists?.[0].name}
      />
      <PlayControl />
      <VolumControl />
    </div>
  );
}

export default Footer;
