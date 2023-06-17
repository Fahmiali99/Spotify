import React from "react";
import { FaPlay } from "react-icons/fa";
import { Substring } from "../../Utils/Substring";
function PlayList({ images, name, link }) {
  return (
    <div className=" ">
      <button
        onClick={() => window.open(link)}
        className="hover:bg-HGstandar  bg-Gstandart shadow-lg p-4 rounded-lg transition duration-300 ease-in-out ..."
      >
        <div className="top-artists-wrapper ">
          <div className="relative ">
            <img className=" rounded-lg" src={images} alt="profileimage" />
            <div className="play-icon-wrapper ">
              <div className="bottom-2 right-2 absolute bg-primary w-10 h-10 flex justify-center items-center rounded-full ">
                <FaPlay className="text-black" />
              </div>
            </div>
          </div>

          <h1 className="pt-4 font-bold text-md mb-2">{Substring(name)}</h1>
        </div>
      </button>
    </div>
  );
}

export default PlayList;
