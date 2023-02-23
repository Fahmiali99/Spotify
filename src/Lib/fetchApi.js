import axios from "axios";
import { SELECTED_PLAYLIST } from "../Config/urlApi";

export const getPlaylist = async (token) => {
  const response = await axios.get(SELECTED_PLAYLIST, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response?.data?.items;
};
