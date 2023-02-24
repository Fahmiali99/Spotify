export const Client_Id = "ef0d7879ebe44432b2e88c347b56c2bb";
export const Redirect_Uri = "http://localhost:3000/";
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
export const openData = `${Auth_Api}?client_id=${Client_Id}&redirect_uri=${Redirect_Uri}&response_type=${Response_Type}&scope=${Scope}`;

export const FETCH_PROFILE = "https://api.spotify.com/v1/me";
export const FETCH_PLAYLISTS = "https://api.spotify.com/v1/me/playlists";
export const FETCH_SELECTED_PLAYLIST = "https://api.spotify.com/v1/playlists";
export const CURRENTLY_PLAYING_TRACK =
  "https://api.spotify.com/v1/me/player/currently-playing";
