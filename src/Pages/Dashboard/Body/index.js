import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedPlaylist } from "../../../Lib/fetchApi";
import { setSelected } from "../../../Store/selected";

import CoverPage from "../../../Components/Body/CoverPage";
import SongsPage from "../../../Components/Body/SongsPage";

function Body() {
  const dispatch = useDispatch();
  let { isAuthorized } = useSelector((state) => state.auth);
  const { selected } = useSelector((state) => state.selected);

  useEffect(() => {
    getSelectedPlaylist(isAuthorized).then((data) => {
      dispatch(setSelected(data));
    });
  }, [dispatch, isAuthorized]);

  return (
    <div>
      <div className=" bg-gradient-to-b from-gray-700 via-gray-900 to-black">
        <div className="  h-screen">
          <div className=" px-8 pt-32 pb-32  overflow-y-scroll h-screen  ">
            <div>
              <CoverPage
                image={selected.images?.[0].url}
                name={selected.name}
                description={selected.description}
              />

              <SongsPage selected={selected} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
