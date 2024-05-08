import React from "react";
import discord from "../assets/discord.png";
import youtube from "../assets/yt.png";
import sefaris from "../assets/sefaris.png";
import letter from "./../assets/letter.png";
import { useNavigate } from "react-router-dom";

export const References = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center space-x-12 p-12  h-80">
      <div className="mt-12">
        <a
          href="https://discord.gg/TD9jv9vv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-20 h-13 hover:scale-110"
            src={discord}
            alt="Discord image"
          />
        </a>
      </div>
      <div className="mt-10">
        <a
          href="https://www.youtube.com/channel/UCN04s-smMlIMIKlJLKA85IQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-20 h-13 hover:scale-110"
            src={youtube}
            alt="YT image"
          />
        </a>
      </div>
      <div className="mt-14">
        <a
          href="https://www.sefaris.eu/lobos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-24 h-16 rounded-full hover:scale-110"
            src={sefaris}
            alt="YT image"
          />
        </a>
      </div>
      <div className="mt-8">
        <button onClick={() => navigate("/Compedium/Changelog")}>
          <img
            className="w-20 h-13  hover:scale-125"
            src={letter}
            alt="Changelog"
          />
        </button>
      </div>
    </div>
  );
};
