import axios from "axios";
import {
  FETCH_PLAYLISTS,
  FETCH_PROFILE,
  FETCH_SELECTED_PLAYLIST,
} from "../Config/urlApi";

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

export const getSelectedPlaylist = async (token) => {
  const selectedPlaylistId = "6ScdHmICV8RUjVQjlAsZUo";
  const response = await axios.get(
    `${FETCH_SELECTED_PLAYLIST}/${selectedPlaylistId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response?.data;
};
