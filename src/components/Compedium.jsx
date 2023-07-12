import React from "react";
import wrzod from "../assets/wrzod.png";
import book from "../assets/book.png";
import letter from "../assets/letter.png";

import { useNavigate } from "react-router-dom";

const Compedium = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-28 text-white text-center">
      <h1 className="text-orange-500 text-3xl">Kompedium wiedzy</h1>
      <hr className="styledHr mt-4 my-4" />
      <div className="flex justify-center font-serif">
        <div className="w-1/3 px-2">
          <div className="text-center">
            <button
              className="hover:scale-110 max-w-sm"
              onClick={() => navigate("/Compedium/Noobguide")}
            >
              <img src={wrzod} className="mx-auto pb-3" />
              <h1 className="text-xl">Jak nie być noobem</h1>
            </button>
          </div>
        </div>
        <div className="w-1/3 px-2">
          <button
            className="hover:scale-110 max-w-sm"
            onClick={() => navigate("/Compedium/lobosguide")}
          >
            <img src={book} className="mx-auto pb-4" />
            <h1 className="text-xl">Poradnik Lobosu</h1>
          </button>
        </div>
        <div className="w-1/3 px-2">
          <button
            className="hover:scale-110 max-w-sm"
            onClick={() => navigate("/Compedium/Changelog")}
          >
            <img src={letter} className="mx-auto pb-4" />
            <h1 className="text-xl">Lista zmian w Definitive Edition</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Compedium;
