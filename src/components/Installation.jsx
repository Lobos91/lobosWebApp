import React from "react";
import { useTranslation } from "react-i18next";
import resourceManager from "../assets/resourcemanager.png";

const Installation = () => {
  const { t } = useTranslation("");
  return (
    <div className="pt-28 pl-10 text-white space-y-1 space-x-2 pb-12">
      <h1 className=" text-2xl pb-4 text-orange-400">
        {t("installation.header")}
      </h1>
      <h1>1. Zainstaluj czystego Gothic 2 z dodatkiem Noc Kruka.</h1>
      <h1>
        2. Pobierz{" "}
        <a
          href="https://drive.google.com/file/d/18si3zHD6cnIPeg1Snhyop8bnPdTTnVFT/view"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 hover:text-red-500 "
        >
          Resource Manager{" "}
        </a>
      </h1>
      <h2>3. Otwórz Resource Managera i kliknij w zakładkę "Union"</h2>
      <h1>
        4. Kliknij na Player Kit + Patch dla systemów 64-bitowych (Nawet jeśli
        używasz komputera 32-bitowego)
      </h1>
      <details>
        <summary className="cursor-pointer pl-4 hover:font-bold">
          (Pokaż zdjęcie)
        </summary>
        <img src={resourceManager} />
      </details>
    </div>
  );
};

export default Installation;
