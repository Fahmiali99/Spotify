import React from "react";
import { BsSearch } from "react-icons/bs";
function FromInput({ onSubmit, onChange }) {
  return (
    <form className="pl-10" onSubmit={onSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <BsSearch className=" text-lg text-gray-500 dark:text-gray-400" />
        </div>
        <input
          onChange={onChange}
          type="search"
          id="default-search"
          className="block py-2.5 w-80 pl-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full"
          placeholder="Apa yang ingin kamu dengarkan?"
          required
        />
      </div>
    </form>
  );
}

export default FromInput;
