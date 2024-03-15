import React from "react";
import flaga from "../../assets/flaga.png";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation("");
  return (
    <div className="flex justify-center pt-28 pb-20 text-white ">
      <div className="w-1/5 fixed left-0 top-1/2 transform -translate-y-1/2 hide-on-1024 ">
        <img src={flaga} className="imageAnimation" />
      </div>
      <div className="text-center w-3/5 centertext-mobile ">
        <h1 className="text-orange-600 text-3xl pb-4">
          {" "}
          {t("news.title")}
        </h1>
       

        <hr className="styledHr my-6" />
        <article>
          <h1 className="text-lg text-orange-200">
            Wstępna premiera modyfikacji: 1 maj 2024.
          </h1>
          <p className="italic">
            2024-03-15
          </p>
        </article>
        <hr className="styledHr my-6" />
       
      
      </div>

      <div className="w-1/5 fixed right-0 top-1/2 transform -translate-y-1/2">
        <img
          src={flaga}
          className="scale-x-[-1] hide-on-1024  imageAnimation"
        />
      </div>
    </div>
  );
};

export default News;
