import React, { useState } from "react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";

function PlayControl() {
  const [active, setActive] = useState(false);

  function toggleControl() {
    setActive(!active);
  }
  return (
    <div className="flex items-center justify-center gap-x-8">
      <div className="shuffle">
        <BsShuffle className="text-control ease-in-out duration-300 hover:text-white" />
      </div>
      <div className="text-4xl">
        <CgPlayTrackPrev className="text-control ease-in-out duration-300 hover:text-white" />
      </div>
      <div className="text-white text-4xl ">
        <button onClick={toggleControl}>
          {active ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
        </button>
      </div>
      <div className="text-4xl">
        <CgPlayTrackNext className="text-control ease-in-out duration-300 hover:text-white" />
      </div>
      <div className="repeat">
        <FiRepeat className="text-control ease-in-out duration-300 hover:text-white" />
      </div>
    </div>
  );
}

export default PlayControl;
