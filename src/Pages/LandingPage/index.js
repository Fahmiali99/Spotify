import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../Store/auth";
import { openData } from "../../Config/urlApi";

function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    // console.log(token);

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
              className="mt-5 focus:outline-none text-white bg-darks hover:bg-white hover:text-darks focus:ring-4 focus:ring-green-300 font-medium  text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 rounded-full"
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
