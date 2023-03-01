import React from "react";

function Profile() {
  return (
    <div className="h-screen">
      <div className="flex px-8 py-8 pt-32  bg-gray-700">
        <div className=" ">
          <img
            src="	https://i.scdn.co/image/ab6775700000ee85ba7517bff18e58754a94c220"
            alt=""
            width={232}
            className="rounded-full"
          />
        </div>
        <div className="flex items-end pl-7">
          <div>
            <h1 className="text-md font-medium">Profile</h1>
            <h1 className=" text-8xl font-bold mb-7">Fahmiali13</h1>
            <h1>
              <span className="flex">
                10 Playlist Publik <li className="mx-2 ">1 Mengikuti</li>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
