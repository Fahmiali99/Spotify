import React from "react";

function CoverPage({ image, name, description }) {
  return (
    <div className="flex items-end">
      <img src={image} alt="" width={250} />
      <div className="px-6">
        <p className="text-white uppercase font-medium">playlist</p>
        <h1 className="text-white font-bold xl:text-7xl  tracking-tight">
          {name}
        </h1>
        <p className="text-white  font-medium">{description}</p>
      </div>
    </div>
  );
}

export default CoverPage;
