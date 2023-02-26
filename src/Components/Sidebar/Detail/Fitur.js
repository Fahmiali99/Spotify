import React from "react";

function Fitur({ href, Icons, title }) {
  return (
    <ul>
      <li>
        <a
          href={href}
          className="flex items-center py-2 px-2 text-base text-standart hover:text-white font-medium"
        >
          <h1 className="text-2xl">
            <Icons />
          </h1>
          <span className="ml-3  text-sm font-semibold">{title}</span>
        </a>
      </li>
    </ul>
  );
}

export default Fitur;
