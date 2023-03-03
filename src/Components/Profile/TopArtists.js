import React from "react";

function TopArtists({ images, name, type }) {
  return (
    <div className=" bg-indigo-500">
      <img src={images} alt="" />
      <div>
        <h1>{name}</h1>
        <h1>{type}</h1>
      </div>
    </div>
  );
}

export default TopArtists;
