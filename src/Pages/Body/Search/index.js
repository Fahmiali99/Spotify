import React, { useState } from "react";
import Navbar from "../../../Components/Navbar";
import BackPage from "../../../Components/Common/BackPage";
import { useDispatch, useSelector } from "react-redux";
import { getSearching } from "../../../Lib/fetchApi";
import { setQuerySearch } from "../../../Store/search";
import FromInput from "../../../Components/Search/FromInput";
import Songs from "../../../Components/Search/Songs";
import { TimeConverts } from "../../../Utils/TimeConverts";
import { setSongId } from "../../../Store/songId";

function Search() {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");

  let { isAuthorized } = useSelector((state) => state.auth);
  let { searchQuery, searchItem } = useSelector((state) => state.search);
  const { song } = useSelector((state) => state.songId);

  const handleSearching = async (e) => {
    e.preventDefault();
    getSearching(isAuthorized, searchData).then((data) => {
      dispatch(setSongId(data.tracks.items));
    });
    dispatch(setQuerySearch(searchData));
  };

  return (
    <div>
      <Navbar
        search={
          <div className="flex items center">
            <BackPage />
            <FromInput
              onSubmit={handleSearching}
              onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
        }
      />
      <div className=" px-8 pt-32 pb-32  overflow-y-scroll h-screen">
        {!searchItem ? (
          song.length ? (
            <h1 className="text-2xl font-medium pt-6 mb-2">
              Top songs for you
            </h1>
          ) : null
        ) : (
          <h1 className=" text-2xl font-medium pt-6 mb-2">
            Result for "{searchQuery}"
          </h1>
        )}
        <div className="mx-auto overflow-hidden">
          <div className="grid grid-cols-2  md:grid-cols-6 gap-4 shadow-md py-4">
            {song.length
              ? song.map((track, idx) => (
                  <Songs
                    key={idx}
                    title={track.name}
                    artists={track.artists[0].name}
                    image={track.album.images[0].url}
                    duration={TimeConverts(track.duration_ms)}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
