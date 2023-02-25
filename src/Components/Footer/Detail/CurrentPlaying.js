import React from "react";

function CurrentPlaying({ images, name, artists }) {
  return (
    <div>
      <div className="flex items-center text-white">
        <img src={images} alt="" />
        <div className="pl-3">
          <h1 className="font-medium">{name}</h1>
          <p className="text-xs">{artists}</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentPlaying;
