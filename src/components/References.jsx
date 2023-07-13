import React from "react";
import discord from "../assets/discord.png";
import youtube from "../assets/yt.png";
import bs from "../assets/bs.png";
import letter from "./../assets/letter.png";
import { useNavigate } from "react-router-dom";

export const References = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center space-x-12 p-12 mb-10 ">
      <div className="mt-2">
        <a
          href="https://discord.com/channels/480664394020159488/1011979124253937784"
          className="px-4 py-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-16 h-13 hover:scale-110"
            src={discord}
            alt="Discord image"
          />
        </a>
      </div>
      <div>
        <a
          href="https://www.youtube.com/@sebaa30122"
          className="px-4 py-2 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-16 h-13 hover:scale-110"
            src={youtube}
            alt="YT image"
          />
        </a>
      </div>
      <div className="mt-1">
        <a
          href="https://bractwospolszczenia.pl/showthread.php?tid=936"
          className="px-4 py-2 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-14 h-14 rounded-full hover:scale-110"
            src={bs}
            alt="YT image"
          />
        </a>
      </div>
      <div className="mt-1">
        <button
          onClick={() => navigate("/Compedium/Changelog")}
          className="py-2 "
        >
          <img
            className="w-20 h-22  hover:scale-150"
            src={letter}
            alt="Changelog"
          />
        </button>
      </div>
    </div>
  );
};
