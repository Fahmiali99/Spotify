import axios from "axios";
import { FETCH_PLAYLISTS } from "../Config/urlApi";

export const getPlaylist = async (token) => {
  const response = await axios.get(FETCH_PLAYLISTS, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response?.data?.items;
};
