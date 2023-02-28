import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function BackPage() {
  const [notif, setNotif] = useState(false);
  const back = useHistory();
  const goBack = (e) => {
    back.goBack(e);
  };

  const handleMouseEnter = () => {
    setNotif(true);
  };

  const handleMouseLeave = () => {
    setNotif(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button onClick={goBack} className="  flex justify-center items-center ">
        <span className="w-10 h-10 rounded-full bg-darks opacity-50" />
        <IoIosArrowBack className=" absolute" opacity={100} />
      </button>
      {notif && (
        <div className=" absolute bg-darks px-3 mt-3 py-2 rounded-lg">
          Go Back
        </div>
      )}
    </div>
  );
}
