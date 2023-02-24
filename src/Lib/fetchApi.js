import axios from "axios";
import { FETCH_PLAYLISTS, FETCH_PROFILE } from "../Config/urlApi";

export const getPlaylist = async (token) => {
  const response = await axios.get(FETCH_PLAYLISTS, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response?.data?.items;
};

export const getProfile = async (token) => {
  const response = await axios.get(FETCH_PROFILE, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response?.data;
};
