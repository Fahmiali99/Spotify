import axios from "axios";
import {
  FETCH_CURRENTLY_PLAYING,
  FETCH_PLAYLISTS,
  FETCH_PROFILE,
  FETCH_SEARCH,
  FETCH_SELECTED_PLAYLIST,
  FETCH_TOP_ARTISTS,
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

export const getCurrentPlaying = async (token) => {
  const response = await axios.get(FETCH_CURRENTLY_PLAYING, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response?.data?.item;
};

export const getTopArtists = async (token) => {
  const response = await axios.get(FETCH_TOP_ARTISTS, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response?.data?.items;
};

export const getSearching = async (token, search) => {
  const response = await axios.get(FETCH_SEARCH, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    params: {
      q: search,
      type: "track",
      limit: 18,
    },
  });
  return response?.data;
};
