import React from "react";
import { useState } from "react";
import piorun from "../../assets/piorun2.png";
import { useTranslation } from "react-i18next";

const Changelog = () => {
  const [allChanges, setAllChanges] = useState(false);
  const { t } = useTranslation("");
  const crucialChangesObject = t("changelog.important", {
    returnObjects: true,
  });
  const commonChangesObject = t("changelog.common", {
    returnObjects: true,
  });

  const crucialChanges = Object.entries(crucialChangesObject);
  const commonChanges = Object.entries(commonChangesObject);

  return (
    <div className="pt-28  pb-24 text-white ">
      <h1 className="text-orange-600 text-3xl pb-4 text-center">
        {t("changelog.header")}
      </h1>

      <div className="flex justify-center pb-6 space-x-10">
        <button
          onClick={() => setAllChanges(false)}
          className="bg-transparent hover:bg-red-500 text-white font-semibold py-2 px-4 border border-red-500 hover:border-transparent rounded"
        >
          {t("changelog.buttonCrucial")}
        </button>
        <button
          onClick={() => setAllChanges(true)}
          className="z-10 bg-transparent hover:bg-blue-500 text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          {t("changelog.buttonCommon")}
        </button>
      </div>
      <div className="flex">
        <article className=" pl-20 w-3/5">
          <ul className="rolling-list">
            {crucialChanges.map((zdanie) => (
              <li className="list-disc">{zdanie[1]}</li>
            ))}
          </ul>

          {/* Less crucial Changes from here  */}

          {allChanges ? (
            <ul
              className={
                allChanges
                  ? "list-disc animate-pulse temporary-bounce text-blue-100 rolling-list"
                  : ""
              }
            >
              {commonChanges.map((zdanie) => (
                <li className="list-disc">{zdanie[1]}</li>
              ))}
            </ul>
          ) : null}
        </article>
        <article className="w-2/5 fixed right-0 top-2/4 transform -translate-y-1/2">
          <img
            src={piorun}
            className="scale-75 mt-32 hidden lg:block imageAnimation"
          />
        </article>
      </div>
    </div>
  );
};

export default Changelog;
