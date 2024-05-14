import React from "react";
import { useTranslation } from "react-i18next";
import resourceManager from "../assets/resourcemanager.png";
import piorun from "../assets/piorun2.png";

const Installation = () => {
  const { t } = useTranslation("");
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/3  pt-28 ">
        <div
          id="introAnimation"
          className="pl-4 pr-4 text-white space-y-2 space-x-2 pb-12 max-w-3xl md:mx-auto"
        >
          <h1 className=" text-2xl pb-4 pl-2 text-orange-400">
            {t("installation.header")}
          </h1>
          <h1>1. Zainstaluj czystego Gothic 2 z dodatkiem Noc Kruka.</h1>
          <h1 className="pl-4 ">
            Upewnij się, że nazwa folderu z grą nie zawiera polskich znaków np.
            Gothic 2 Złota Edycja. Jeśli tak jest, poprostu zmień nazwę folderu
            na Gothic2NK lub zamień „ł” na „l”.
          </h1>
          <h1>
            2. Pobierz{" "}
            <a
              href="https://drive.google.com/file/d/18si3zHD6cnIPeg1Snhyop8bnPdTTnVFT/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-500 "
            >
              Resource Manager.{" "}
            </a>
            Jeśli używasz Steam, znajdziesz go też{" "}
            <a
              href="https://steamcommunity.com/sharedfiles/filedetails/?id=2787458679"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-500 "
            >
              tutaj.
            </a>
          </h1>
          <h2>3. Otwórz Resource Managera i kliknij w zakładkę "Union"</h2>
          <h1>
            4. Kliknij na Player Kit + Patch dla systemów 64-bitowych (Nawet
            jeśli używasz komputera 32-bitowego)
          </h1>
          <details>
            <summary className="cursor-pointer pl-4 hover:font-bold">
              (Pokaż zdjęcie)
            </summary>
            <img src={resourceManager} />
          </details>
          <h1>
            5. Zainstaluj Player Kit + Patch dla systemów 64-bitowych, klikając
            na jego okno poczym podaj ścieżkę do folderu z grą.
          </h1>
          <h1>
            6. Zainstaluj najnowszą wersję Uniona w ten sam sposób co Player Kit
            + Patch. Z reguły jest to pierwsza pozycja zaraz po PlayerKit.
          </h1>
          <h1 className=" text-orange-400">
            Opcjonalnie możesz pobrać i zainstalować DirectX 11.
          </h1>
          <details>
            <summary className="cursor-pointer pl-4 hover:font-bold">
              (Pokaż odnośnik)
            </summary>

            <a
              href="https://github.com/SaiyansKing/GD3D11/releases/download/v17.8-dev10/GD3D11-17.8-dev10.zip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-500 pl-9"
            >
              DirectX 11
            </a>
            <h1>Pobrane pliki i foldery należy wrzucić do folderu /System.</h1>
          </details>

          <h1>
            7. Pobierz interesującą cię wersję modyfikacji Lobos ze strony (Do wybory google drive lub moddb) i rozpakuj pobrany folder np.
            programem WinRar. Jeśli pobierasz Lobos Definitive Edition, pobierz również dubbing, który jest osobnym plikiem nazwanym Lobos Definitive Edition DubbingPL.
          </h1>
          <h1 className="pl-4 ">
            Skopiuj pliki z wypakowanego folderu do odpowiadających im folderów
            w Gothic 2.{" "}
          </h1>
          <h1 className="pl-4 ">
            Dla przykładu pliki z folderu System wklej do Gothic2/System. Pliki
            z folderu modvdf wklej do Gothic2/Data/modvdf. Postępuj analogicznie
            z pozostałymi plikami. 
          </h1>
          <h1>8. Odpalaj grę używajac GothicStarter.exe</h1>
          <h1 className=" text-xl pt-4 text-orange-400">Uwagi</h1>
          <h1>
            Większość modyfikacji może być zainstalowana na jednej instancji gry
            Gothic. Istnieją natomiast mody które bardziej ingerują w elementy
            gry takie jak Returning czy mody graficzne, co może powodować błędy.
            W przypadku, gdy masz zainstalowany jeden z nich, najlepiej wrócić
            do punktu 1 i przygotować czystą instancję gry Gothic.
          </h1>
          <h1>
            Jeśli używasz programu Spine to nie instaluj moda ręcznie. Używaj
            tylko programu Spine do instalacji modów.
          </h1>
        </div>
      </div>
      <div className="w-1/3">
        <img
          src={piorun}
          className="z-0 animate-pulse imageAnimation mt-16 hideOnMobile"
          alt="Piorun"
        />
      </div>
    </div>
  );
};

export default Installation;
