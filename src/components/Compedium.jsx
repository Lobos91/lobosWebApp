import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow.png";
import galos from "../assets/galos.png";
import { useTranslation } from "react-i18next";

const Compedium = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="pt-28  text-white ">
      <h1 className="text-orange-600 text-4xl pb-4 text-center">
        {t("compedium")}
      </h1>
      <hr className="styledHr mb-8" />

      <div className="flex justify-center">
        <article className="w ">
          <div className="flex flex-col space-y-4 text-xl text-shadow">
            <button
              className="hover:text-orange-400 flex items-center text-left"
              onClick={() => navigate("/Compedium/Changelog")}
            >
              <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
              {t("changelogcompedium.title")}
            </button>
            <button
              className="hover:text-orange-400 flex items-center text-left"
              onClick={() => navigate("/Compedium/Version")}
            >
              <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
              {t("lobosvsultra.title")}
            </button>

            <button
              className="hover:text-orange-400 flex items-center text-left"
              onClick={() => navigate("/Compedium/Level")}
            >
              <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
              {t("difficultylevel.title")}
            </button>
            <button
              className="hover:text-orange-400 flex items-center text-left"
              onClick={() => navigate("/Compedium/CommonInfo")}
            >
              <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
              {t("technicalinfo.title")}
            </button>
            <button
              className="hover:text-orange-400 flex items-center text-left"
              onClick={() => navigate("/Compedium/Guide")}
            >
              <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
              {t("lobosguide.title")}
            </button>

            <button
              className="hover:text-orange-400 flex items-center"
              onClick={() => navigate("/Compedium/Noobguide")}
            >
              <img src={arrow} className="w-7 h-7 mr-2" alt="Arrow" />
              {t("noob.title")}
            </button>
          </div>
        </article>
        <article>
          <img src={galos} className="hidden md:block imageAnimation" />
        </article>
      </div>
    </div>
  );
};

export default Compedium;
