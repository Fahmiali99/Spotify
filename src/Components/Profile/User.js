import React from "react";

function User({ name, imgUser, totalplaylist }) {
  return (
    <div className="flex px-8 py-8 pt-32  bg-gray-700">
      <div className=" ">
        <img src={imgUser} alt="" width={232} className="rounded-full" />
      </div>
      <div className="flex items-end pl-7">
        <div>
          <h1 className="text-md font-medium">Profile</h1>
          <h1 className=" text-8xl font-bold mb-7">{name}</h1>
          <h1>
            <span className="flex">
              {totalplaylist} Playlist Publik{" "}
              <li className="mx-2 ">1 Mengikuti</li>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default User;
