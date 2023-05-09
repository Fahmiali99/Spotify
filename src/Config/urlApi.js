export const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
export const Redirect_Uri = "https://musicaly.vercel.app/";
export const Auth_Api = "https://accounts.spotify.com/authorize";
export const Scope = [
  "user-read-private",
  "user-read-email",
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
];
export const Response_Type = "token";
export const openData = `${Auth_Api}?client_id=${CLIENT_ID}&redirect_uri=${Redirect_Uri}&response_type=${Response_Type}&scope=${Scope}`;

export const FETCH_PROFILE = "https://api.spotify.com/v1/me";
export const FETCH_PLAYLISTS = "https://api.spotify.com/v1/me/playlists";
export const FETCH_SELECTED_PLAYLIST = "https://api.spotify.com/v1/playlists";
export const FETCH_CURRENTLY_PLAYING =
  "https://api.spotify.com/v1/me/player/currently-playing";
export const FETCH_TOP_ARTISTS = "https://api.spotify.com/v1/me/top/artists";
export const FETCH_SEARCH = "https://api.spotify.com/v1/search";
