import React, { Suspense } from "react";
import introBG2 from "../assets/introBG2.png";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation("");

  return (
    <>
      <div
        id="introAnimation"
        className="mt-16"
        style={{
          backgroundImage: `url(${introBG2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: 800,
        }}
      >
        <div className="  text-white w-4/12 pt-14 pl-12 pb-10 centertext-mobile">
          <h1 className="text-orange-500 text-3xl pb-2">Prolog</h1>
          <div className=" leading-9 ">
            <p>{t("intro.p1")}</p>
            <p>{t("intro.p2")}</p>
            <p>{t("intro.p3")}</p>
            <p>{t("intro.p4")}</p>
            <p>{t("intro.p5")}</p>
          </div>
        </div>
      </div>
      <hr className="styledHr" style={{ height: 3 }} />
    </>
  );
};

export default Intro;
