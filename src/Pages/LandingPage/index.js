import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToken, setToken } from "../../Store/auth";

function LandingPage() {
  const CLIENT_ID = "ef0d7879ebe44432b2e88c347b56c2bb";
  const REDIRECT_URI = "http://localhost:3000/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const SCOPE = [
    "user-read-private",
    "user-read-email",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
  ];
  const RESPONSE_TYPE = "token";
  const openData = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

  const dispatch = useDispatch();

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    dispatch(setToken(token));
  }, [dispatch]);

  return (
    <div>
      <div className="h-screen grid justify-center items-center bg-primary text-dark">
        <div>
          <div className="flex justify-center items-center">
            <img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
              alt=""
              width={300}
            />
          </div>
          <div className="flex justify-center pt-2">
            <a
              href={openData}
              className="mt-5 focus:outline-none text-white bg-dark hover:bg-white hover:text-dark focus:ring-4 focus:ring-green-300 font-medium  text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 rounded-full"
            >
              <button variant="primary">Login</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
