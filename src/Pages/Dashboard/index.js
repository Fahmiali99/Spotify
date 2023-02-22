import React from "react";

function Dashboard({ logout }) {
  return (
    <div className="">
      <div className="text-white bg-dark pt-4 pb-3 flex justify-center">
        Dashboard
        <div className="flex justify-center pt-2">
          <button
            onClick={logout}
            className="mt-5 focus:outline-none text-white bg-green-500 hover:bg-white hover:text-dark focus:ring-4 focus:ring-green-300 font-medium  text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 rounded-full"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
