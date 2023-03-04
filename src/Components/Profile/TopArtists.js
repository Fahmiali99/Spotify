import React from "react";
import { Substring } from "../../Utils/Substring";
import { FaPlay } from "react-icons/fa";
function TopArtists({ images, name, type }) {
  return (
    <button className="hover:bg-HGstandar bg-Gstandart shadow-lg p-4 rounded-lg">
      <div className="top-artists-wrapper">
        <div className="grid place-items-center">
          <div
            style={{
              backgroundImage: `url(${images})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "50%",
              width: "161px",
              height: "161px",
            }}
            className="overflow-hidden"
          />
        </div>
        <div className="">
          <div className="play-icon-wrapper">
            <div className="flex justify-end">
              <div className="bg-primary w-10 h-10 absolute bottom-20 flex justify-center items-center rounded-full ">
                <FaPlay className="" />
              </div>
            </div>
          </div>
          <div className="pt-4">
            <h1 className="font-bold text-md mb-2">{Substring(name)}</h1>
            <p>{type}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default TopArtists;
