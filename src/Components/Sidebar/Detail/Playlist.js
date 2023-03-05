import React from "react";

function Playlist({ title }) {
  return (
    <div>
      <button
        className={`text-start text-sm font-medium py-1 px-2 text-standart hover:text-white block`}
      >
        {title}
      </button>
    </div>
  );
}

export default Playlist;
