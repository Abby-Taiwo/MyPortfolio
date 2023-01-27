import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <div id="home" className=" mt-20 text-white text-center">
      <h2 className="text-2xl font-bold mb-8">Design. Build. Improve</h2>
      <h1 className="text-6xl font-semibold">I create beautiful websites</h1>
      <h1 className="text-6xl font-semibold"> your users will love</h1>

      <button className="border border-transparent mt-9 w-28 h-10 bg-purple rounded-xl text-white font-bold text-">
        <a
          href="https://drive.google.com/file/d/1l5L9F8cfcQ7sgbowE55juTVE5waSFLAp/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
        >
          My Resume
        </a>
      </button>
    </div>
  );
}

export default Home;
