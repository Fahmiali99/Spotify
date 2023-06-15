import React from "react";
import { BiTime } from "react-icons/bi";
import moment from "moment";
import { TimeConverts } from "../../Utils/TimeConverts";

function SongsPage({ song }) {
  return (
    <div className="">
      <div className="pt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-standart ">
          <thead className="text-xs uppercase     space-y-2 border-b border-gray-700 ">
            <tr>
              <th scope="col" className="p-4">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                TITLE
              </th>
              <th scope="col" className="px-6 py-3">
                ALBUM
              </th>
              <th scope="col" className="px-6 py-3">
                DATE ADDED
              </th>

              <th scope="col" className="px-6 py-3">
                <BiTime className="text-xl" />
              </th>
            </tr>
          </thead>
          {song.length ? (
            song.map((item, idx) => {
              return (
                <tbody key={idx}>
                  <tr className="  dark:bg-gray-800   hover:bg-gray-700 hover:text-white">
                    <td className="w-4 p-4">{idx + 1}</td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-3 font-normal  whitespace-nowrap dark:text-white"
                    >
                      <img
                        src={item.track.album.images?.[2].url}
                        alt=""
                        width={50}
                      />
                      <div className="px-2">
                        <button className="text-start">
                          <h1 className="text-white pb-1  text-base hover:underline hover:underline-offset-2 decoration-1">
                            {item.track.name}
                          </h1>
                          <p className="hover:underline hover:underline-offset-2 decoration-1">
                            {item.track.artists.map((artist) => artist.name)}
                          </p>
                        </button>
                      </div>
                    </th>

                    <td className="px-6 py-4 hover:underline hover:underline-offset-2 decoration-1">
                      {item.track.album.name}
                    </td>
                    <td className="px-6 py-4">
                      {moment(
                        `${song.tracks?.items?.[idx].added_at}`,
                        "YYYYMMDD"
                      ).format("ll")}
                    </td>

                    <td className="px-6 py-4">
                      {TimeConverts(item.track.duration_ms)}
                    </td>
                  </tr>
                </tbody>
              );
            })
          ) : (
            <thead className=" text-2xl font-medium pt-6 mb-2">
              <tr>
                <th scope="col" className="p-4">
                  You haven't best of songs
                </th>
              </tr>
            </thead>
          )}
        </table>
      </div>
    </div>
  );
}

export default SongsPage;
