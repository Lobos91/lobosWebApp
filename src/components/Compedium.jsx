import React from "react";
import wrzod from "../assets/wrzod.png";
import book from "../assets/book.png";
import letter from "../assets/letter.png";
import gothic from "../assets/gothic_icon.png";

import { useNavigate } from "react-router-dom";

const Compedium = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-28 text-white text-center">
      <h1 className="text-orange-500 text-3xl">Kompedium wiedzy</h1>
      <hr className="styledHr mt-4 my-4" />
      <div className="flex flex-wrap justify-center font-serif">
        <div className="w-full lg:w-1/4 md:w-1/2 px-2">
          <div className="text-center">
            <button
              className="hover:scale-110"
              onClick={() => navigate("/Compedium/Noobguide")}
            >
              <img
                src={wrzod}
                className="mx-auto pb-3  w-32 h-52 object-cover"
                alt="Noob Guide"
              />
              <h1 className="text-xl h-10">Jak nie być noobem</h1>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/4 md:w-1/2 px-2">
          <button
            className="hover:scale-110"
            onClick={() => navigate("/Compedium/lobosguide")}
          >
            <img
              src={book}
              className="mx-auto pb-4  w-52 h-52 object-cover"
              alt="Lobos Guide"
            />
            <h1 className="text-xl h-10">Poradnik Lobosu</h1>
          </button>
        </div>

        <div className="w-full lg:w-1/4 md:w-1/2 px-2">
          <button
            className="hover:scale-110"
            onClick={() => navigate("/Compedium/Changelog")}
          >
            <img
              src={letter}
              className="mx-auto pb-4 w-36 h-52 object-cover"
              alt="Changelog"
            />
            <h1 className="text-xl h-10">Lista zmian w Definitive Edition</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Compedium;
