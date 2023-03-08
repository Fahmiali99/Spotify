import React, { useState, useEffect } from "react";
import Navbar from "../../../Components/Navbar";

import BackPage from "../../../Components/Common/BackPage";
import { useDispatch, useSelector } from "react-redux";
import { getSearching } from "../../../Lib/fetchApi";
import { setQuerySearch } from "../../../Store/search";
import { setPlaylistForm } from "../../../Store/playlist";
import { setSelected, setSelectedPlaylistId } from "../../../Store/selected";
import FromInput from "../../../Components/Search/FromInput";
import Songs from "../../../Components/Search/Songs";
import { TimeConverts } from "../../../Utils/TimeConverts";

function Search() {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");

  let { isAuthorized } = useSelector((state) => state.auth);
  let { searchQuery, searchItem } = useSelector((state) => state.search);
  let { playlistForm } = useSelector((state) => state.playlist);
  const { selected, selectedPlaylistId } = useSelector(
    (state) => state.selected
  );

  const handleFormChange = (e) => {
    dispatch(
      setPlaylistForm({
        ...playlistForm,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSearching = async (e) => {
    e.preventDefault();
    getSearching(isAuthorized, searchData).then((data) => {
      dispatch(setSelected(data.tracks.items));
    });
    dispatch(setQuerySearch(searchData));
  };

  const toggleSelect = (song) => {
    const uri = song.uri;
    if (selectedPlaylistId.includes(uri)) {
      dispatch(setSelectedPlaylistId(selected.filter((data) => data !== uri)));
    } else {
      dispatch(setSelectedPlaylistId([...selected, uri]));
    }
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
          selected.length ? (
            <h1 className="text-2xl font-medium pt-6 mb-2">
              Top songs for you
            </h1>
          ) : null
        ) : (
          <h1 className=" text-2xl font-medium pt-6 mb-2">
            Result for "{searchQuery}"
          </h1>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 gap-4 py-5">
          {selected.length
            ? selected.map((track, idx) => (
                <Songs
                  key={idx}
                  title={track.name}
                  artists={track.artists[0].name}
                  image={track.album.images[0].url}
                  duration={TimeConverts(track.duration_ms)}
                  buttonSelect={() => toggleSelect(track)}
                  select={selectedPlaylistId.includes(track.uri)}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Search;
