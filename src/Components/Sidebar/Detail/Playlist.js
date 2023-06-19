import React from "react";

function Playlist({ title, link }) {
  return (
    <button
      onClick={() => window.open(link)}
      className={`text-start text-sm font-medium py-1 px-2 text-standart hover:text-white block`}
    >
      {title}
    </button>
  );
}

export default Playlist;
