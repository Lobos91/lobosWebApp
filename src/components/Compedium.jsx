import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow.png";
import galos from "../assets/galos.png";

const Compedium = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-28  text-white text-center">
      <h1 className="text-orange-600 text-4xl pb-4">Kompedium wiedzy</h1>
      <h1 className="text-2xl italic underline underline-offset-6 pb-20">
        Najważniejsze informacje na temat modyfikacji
      </h1>
      <div className="flex justify-center">
        <article className="w ">
          <div className="flex flex-col space-y-4 text-xl text-shadow">
            <button
              className="hover:text-orange-400 flex items-center"
              onClick={() => navigate("/Compedium/Version")}
            >
              <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
              Czym się różni zwykły Lobos od Ultra+?
            </button>
            <button
              className="hover:text-orange-400 flex items-center"
              onClick={() => navigate("/Compedium/Level")}
            >
              <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
              Specyfikacja poziomu trudności w wersji Definitive Edition
            </button>

            <button
              className="hover:text-orange-400 flex items-center"
              onClick={() => navigate("/Compedium/Changelog")}
            >
              <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
              Lista zmian w wersji Definitive Edition
            </button>
            <button
              className="hover:text-orange-400 flex items-center"
              onClick={() => navigate("/Compedium/CommonInfo")}
            >
              <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
              Ogólne informacje na temat rozgrywki
            </button>
            <button
              className="hover:text-orange-400 flex items-center"
              onClick={() => navigate("/Compedium/Classes")}
            >
              <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
              Ekonomia, czyli poradnik o tym jak mieć dużo złota
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
          <img src={galos} />
        </article>
      </div>
    </div>
  );
};

export default Compedium;
