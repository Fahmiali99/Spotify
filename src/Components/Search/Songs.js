import { FaPlay } from "react-icons/fa";
import { Substring } from "../../Utils/Substring";
const Songs = ({ title, artists, image, duration, buttonSelect, select }) => {
  const handleSelect = () => {
    buttonSelect();
  };

  return (
    <div>
      <button
        onClick={() => window.open("https://www.google.com/")}
        className="hover:bg-HGstandar  bg-Gstandart shadow-lg p-4 rounded-lg transition duration-300 ease-in-out ..."
      >
        <div className="top-artists-wrapper ">
          <div className="relative ">
            <img className=" rounded-lg" src={image} alt="profileimage" />
            <div className="play-icon-wrapper ">
              <div className="bottom-2 right-2 absolute bg-primary w-10 h-10 flex justify-center items-center rounded-full ">
                <FaPlay className="text-black" />
              </div>
            </div>
          </div>

          <div className="">
            <div className="pt-4">
              <h1 className="font-bold text-md mb-2">{Substring(title)}</h1>
              <p className="font-medium text-xs mb-2">{Substring(artists)}</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Songs;
