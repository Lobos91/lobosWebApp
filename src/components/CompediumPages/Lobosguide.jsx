import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow.png";

const Lobosguide = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-28 text-white text-center">
      <h1 className="text-orange-600 text-4xl pb-4">Poradnik Lobosu</h1>
      <h1 className="text-2xl italic underline underline-offset-6 pb-20">
        Najważniejsze informacje na temat modyfikacji
      </h1>
      <article className="mx-96 flex justify-center">
        <div className="flex flex-col space-y-4 text-xl text-shadow">
          <button
            className="hover:text-orange-400 flex items-center"
            onClick={() => navigate("/Compedium/Lobosguide/Version")}
          >
            <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
            Czym się różni zwykły Lobos od Ultra+?
          </button>
          <button
            className="hover:text-orange-400 flex items-center"
            onClick={() => navigate("/Compedium/Lobosguide/Version")}
          >
            <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
            Ogólne informacje na temat rozgrywki
          </button>
          <button
            className="hover:text-orange-400 flex items-center"
            onClick={() => navigate("/Compedium/Lobosguide/Classes")}
          >
            <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
            Ekonomia, czyli poradnik o tym jak mieć dużo złota
          </button>
        </div>
      </article>
    </div>
  );
};

export default Lobosguide;
