import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow.png";
import galos from "../assets/galos.png";

const Compedium = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-28  text-white ">
      <h1 className="text-orange-600 text-4xl pb-4 text-center">
        Kompedium wiedzy
      </h1>
      <hr className="styledHr mb-8" />

      <div className="flex justify-center">
        <article className="w ">
          <div className="flex flex-col space-y-4 text-xl text-shadow">
            <button
              className="hover:text-orange-400 flex items-center text-left"
              onClick={() => navigate("/Compedium/Version")}
            >
              <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
              Czym się różni zwykły Lobos od Ultra+?
            </button>
            <button
              className="hover:text-orange-400 flex items-center text-left"
              onClick={() => navigate("/Compedium/Level")}
            >
              <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
              Specyfikacja poziomu trudności Definitive Edition
            </button>

            <button
              className="hover:text-orange-400 flex items-center text-left"
              onClick={() => navigate("/Compedium/Changelog")}
            >
              <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
              Lista zmian w wersji Definitive Edition
            </button>
            <button
              className="hover:text-orange-400 flex items-center text-left"
              onClick={() => navigate("/Compedium/CommonInfo")}
            >
              <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
              Techniczne informacje na temat modyfikacji
            </button>
            <button
              className="hover:text-orange-400 flex items-center text-left"
              onClick={() => navigate("/Compedium/Guide")}
            >
              <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
              Poradnia Lobosu
            </button>

            <button
              className="hover:text-orange-400 flex items-center"
              onClick={() => navigate("/Compedium/Noobguide")}
            >
              <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
              Jak nie być noobem
            </button>
          </div>
        </article>
        <article>
          <img src={galos} className="hidden md:block" />
        </article>
      </div>
    </div>
  );
};

export default Compedium;
