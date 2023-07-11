import React from "react";
import { useTranslation } from "react-i18next";

const Idea = () => {
  const { t } = useTranslation("");
  return (
    <>
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="flex items-center justify-center flex-col pt-5 pl-96 pr-96 pb-7 text-center"
      >
        <h1 className="text-orange-500 text-3xl pb-4">{t("idea.modidea")}</h1>
        <div className=" leading-9 text-white">
          <p>{t("idea.p1")}</p>
          <p>{t("idea.p2")}</p>
        </div>
      </div>
      <hr className="styledHr" style={{ height: 3 }} />
    </>
  );
};

export default Idea;
