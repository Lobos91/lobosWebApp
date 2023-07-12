import React from "react";
import wrzod from "../assets/wrzod.png";
import { useNavigate } from "react-router-dom";

const Compedium = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center pt-28 text-white">
      <div className="w-1/3 pr-4">
        <div className="text-center">
          <button
            className="hover:scale-110"
            onClick={() => navigate("/Compedium/Noobguide")}
          >
            <img src={wrzod} className="mx-auto pb-3" />
            <h1 className="text-xl">Jak nie być noobem</h1>
          </button>
        </div>
      </div>
      <div className="w-1/3 px-2">
        <div>
          {/* Tutaj jest cała zawartość, którą chcesz umieścić w środku */}
          <h1>sadas</h1>
        </div>
      </div>
      <div className="w-1/3 pl-4">
        <div>
          {/* Tutaj jest cała zawartość, którą chcesz umieścić po prawej stronie */}
          <h1>sadas</h1>
        </div>
      </div>
    </div>
  );
};

export default Compedium;
