import React from "react";

function Fitur({ href, Icons, title }) {
  return (
    <ul>
      <li>
        <a href={href} className="flex items-center p-2 text-base font-normal">
          <h1 className="text-3xl">
            <Icons />
          </h1>
          <span className="ml-3 text-white text-sm font-semibold">{title}</span>
        </a>
      </li>
    </ul>
  );
}

export default Fitur;
