import React from "react";
import { useHistory } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { VscLibrary } from "react-icons/vsc";

function Fitur() {
  const history = useHistory();

  function goToSearch() {
    history.push(`/search`);
  }

  function goToUrl() {
    window.location.href = "/";
  }

  const sidebar = [
    {
      id: 1,
      title: "Home",
      Icons: SlHome,
      onClick: goToUrl,
    },
    {
      id: 2,
      title: "Search",
      Icons: BsSearch,
      onClick: goToSearch,
    },
    {
      id: 3,
      title: "Your Library",
      Icons: VscLibrary,
      onClick: goToUrl,
    },
  ];

  return (
    <div>
      {sidebar.map((item, idx) => (
        <ul key={idx}>
          <li>
            <button
              onClick={item.onClick}
              className="flex items-center py-2 px-2 text-base text-standart hover:text-white font-medium"
            >
              <h1 className="text-2xl">
                <item.Icons />
              </h1>
              <span className="ml-3  text-sm font-semibold">{item.title}</span>
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Fitur;
