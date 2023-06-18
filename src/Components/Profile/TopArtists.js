import React from "react";
import { Substring } from "../../Utils/Substring";
import { FaPlay } from "react-icons/fa";
function TopArtists({ images, name, type, link }) {
  return (
    <button
      onClick={() => window.open(link)}
      className="hover:bg-HGstandar bg-Gstandart shadow-lg p-4 rounded-lg"
    >
      <div className="top-artists-wrapper">
        <div className=" relative">
          <div className="w-full  flex justify-center">
            <div className=" flex justify-center imageGrid ">
              <div className="w-full h-full flex justify-center ">
                <img
                  className="bg-cover rounded-full z-0"
                  src={images}
                  alt="profileimage"
                  style={{ width: "161px", height: "161px" }}
                />
              </div>
            </div>
          </div>

          <div className="play-icon-wrapper ">
            <div className="bottom-2 right-2 absolute bg-primary w-10 h-10 flex justify-center items-center rounded-full ">
              <FaPlay className="text-black" />
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h1 className="font-bold text-md mb-2">{Substring(name)}</h1>
          <p>{type}</p>
        </div>
      </div>
    </button>
  );
}

export default TopArtists;
