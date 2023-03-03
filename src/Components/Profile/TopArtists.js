import React from "react";

function TopArtists({ images, name, type }) {
  return (
    <div className="bg-Gstandart shadow-lg">
      <div className="image-container rounded-full bg-primary overflow-hidden">
        <img src={images} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="pt-4">
        <h1 className="font-bold text-md mb-2">{name}</h1>
        <p>{type}</p>
      </div>
    </div>
  );
}

export default TopArtists;
