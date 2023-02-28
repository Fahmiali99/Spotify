import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedPlaylist } from "../../../Lib/fetchApi";
import { setSelected } from "../../../Store/selected";

import CoverPage from "../../../Components/Dashboard/CoverPage";
import SongsPage from "../../../Components/Dashboard/SongsPage";

function Dashboard() {
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
      <CoverPage
        image={selected.images?.[0].url}
        name={selected.name}
        description={selected.description}
      />

      <SongsPage selected={selected} />
    </div>
  );
}

export default Dashboard;
