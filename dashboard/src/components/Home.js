import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <>


      <div className="flex flex-col gap-4 p-4 md:flex-row">
        <div className="w-full md:w-1/3 bg-blue-100 p-4 rounded-xl shadow">
          <TopBar />
        </div>
        <div className="w-full md:w-2/3 bg-green-100 p-4 rounded-xl shadow">
          <Dashboard />
        </div>
      </div>
    </>

  );
};

export default Home;
