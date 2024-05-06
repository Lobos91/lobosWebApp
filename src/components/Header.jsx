import React, { useState, useEffect, useRef, useCallback } from "react";
import gothic_icon from "../assets/gothic_icon.png";
import paypal from "../assets/paypal.png";
import patreon from "../assets/patreon.png";
import polishLogo from "../assets/pl.png";
import engLogo from "../assets/eng.png";
import { Modal } from "./Modal";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isDownloadOpen, setDownloadOpen] = useState(false);
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const dropdownSupportRef1 = useRef(null);
  const dropdownSupportRef2 = useRef(null);

  const dropdownDownloadRef1 = useRef(null);
  const dropdownDownloadRef2 = useRef(null);

  const burgerRef = useRef(null);

  const [isModalOpen, setModalOpen] = useState(false);
  const [moddb, setModdb] = useState("");
  const [googleDrive, setGoogleDrive] = useState("");
  const [title, setTitle] = useState("");
  const { t } = useTranslation(["common"]);
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  // array with language choices. 'pl' must be always first - index 0
  const options = [
    { value: "pl", text: "Polski", image: polishLogo },
    { value: "en", text: "English", image: engLogo },
  ];

  // Language change function //
  const mainHandleChange = (event) => {
    const selectedIndex = parseInt(event.target.value); // selected index of <select> tag
    setSelected(selectedIndex); // assigning a int value to useState
    const selectedLanguage = options[selectedIndex].value;
    i18next.changeLanguage(selectedLanguage);
  };

  function handleLobos() {
    setModalOpen(true);
    setGoogleDrive(
      "https://drive.google.com/file/d/1vOKSHx_zaR4GHkUyvwZLgADwT4r5QloS/view?usp=drive_link"
    );
    setModdb(
      "https://www.moddb.com/games/gothic-ii-the-night-of-the-raven/downloads/lobos-pena-wersja-instalacja-rczna"
    );
    setTitle("Gothic 2 Lobos");
  }

  function handleLobosUltra() {
    setModalOpen(true);
    setGoogleDrive(
      "https://drive.google.com/drive/u/0/folders/1GCeHvSgS_pU4g1Mg7jGEIkz8t6aSYqLE"
    );
    setModdb("https://www.moddb.com/downloads/lobos-ultra-pena-wersja1");
    setTitle("Gothic 2 Lobos Ultra+");
  }

   function handleLobosDefinitiveEdition() {
     setModalOpen(true);
     setGoogleDrive('https://drive.google.com/drive/u/0/folders/1FmJpNLwXD6mlnvcdKDTHfcgqwUCh9Pap');
     setModdb('https://www.moddb.com/members/lobos2/downloads');
     setTitle('Gothic 2 Lobos Definitive Edition')
   }

  function handleResourceManager() {
    setModalOpen(true);
    setGoogleDrive(
      "https://drive.google.com/file/d/18si3zHD6cnIPeg1Snhyop8bnPdTTnVFT/view"
    );
    setModdb(
      "https://www.moddb.com/games/gothic-ii-the-night-of-the-raven/downloads/resource-manager#downloadsform"
    );
    setTitle("Resource Manager");
  }

  // Handle clicking outside to close dropdown lists (support, download)
  const handleClickOutside = useCallback((event) => {
    if (
      (dropdownDownloadRef1.current &&
        dropdownDownloadRef1.current.contains(event.target)) ||
      (dropdownDownloadRef2.current &&
        dropdownDownloadRef2.current.contains(event.target)) ||
      (dropdownSupportRef1.current &&
        dropdownSupportRef1.current.contains(event.target)) ||
      (dropdownSupportRef2.current &&
        dropdownSupportRef2.current.contains(event.target)) ||
      (burgerRef.current && burgerRef.current.contains(event.target))
    ) {
      return;
    }

    setDownloadOpen(false);
    setSupportOpen(false);
    setBurgerOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="navigation">
      <nav className="z-20 flex fixed top-0 left-0 right-0 items-center justify-between flex-wrap bg-amber-600 hover:bg-red-600 transition-colors duration-500 p-4 ">
        <button
          className="flex items-center flex-shrink-0 text-white mr-6 "
          onClick={() => navigate("/")}
        >
          <img src={gothic_icon} style={{ height: 42, width: 42 }} />
          <span className="font-bold text-3xl tracking-tight text-amber-950 hover:text-black hide-on-1024 ">
            othic II Lobos
          </span>
        </button>

        <div className=" flex-grow flex lg:w-auto  ">
          <div className="text-base lg:flex-grow mt-4">
            <button
              className=" text-center inline-flex flex-wrap items-center font-bold lg:mt-0 text-slate-900 hover:text-white mr-4 hideOnMobile"
              onClick={() => setSupportOpen(!supportOpen)}
              ref={dropdownSupportRef1}
            >
              <svg
                className="w-6 h-6 mr-0.5"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                ></path>
              </svg>
              {t("header.support")}
              <svg
                className="w-4 h-4 ml-0.5"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div
              className={`z-30 fixed support-mobile fadeinfast ${
                supportOpen ? "block" : "hidden"
              } bg-gray-700  rounded-lg shadow w-40   `}
            >
              <ul className="h-24 py-2  text-white">
                <li>
                  <a
                    href="https://www.paypal.com/donate/?hosted_button_id=TWQSSHKNVG62S"
                    className="flex items-center px-4 py-2 hover:bg-gray-500 "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-6 h-6 mr-2 "
                      src={paypal}
                      alt="paypal icon"
                    />
                    PayPal
                  </a>
                </li>
                <hr className=" w-40 border-1 border-gray-600 " />
                <li>
                  <a
                    href="https://www.patreon.com/Gothic2Lobos"
                    className="flex items-center px-4 py-2 hover:bg-gray-500 "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-6 h-6 mr-2 rounded-full"
                      src={patreon}
                      alt="Jese image"
                    />
                    Patreon
                  </a>
                </li>
              </ul>
            </div>

            <button
              onClick={() => navigate("/compedium")}
              className="text-center inline-flex flex-wrap items-centerlg:mt-0 text-slate-900 hover:text-white mr-4 font-bold hideOnMobile"
            >
              <svg
                className="w-6 h-6 mr-0.5"
                fill="none"
                stroke="currentColor"
                stroke-width="2.0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                ></path>
              </svg>
              {t("header.guestbook")}
            </button>

            <button
              onClick={() => navigate("/installation")}
              className="text-center inline-flex flex-wrap items-centerlg:mt-0 text-slate-900 hover:text-white mr-4 font-bold hideOnMobile"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-6 h-6 mr-0.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              {t("header.installation")}
            </button>
          </div>

          {/* <------------------------>
          MENU FOR MOBIL VIEW 
          <------------------------> */}

          <div className="flex burger ">
            <button
              onClick={() => setBurgerOpen(!isBurgerOpen)}
              ref={burgerRef}
              type="button"
              className=" items-center text-xl hover:scale-125 hover:text-white "
            >
              <svg
                className="block h-8 w-8 fill-current  "
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          {isBurgerOpen && (
            <ul className="z-20 absolute left-0 mt-14 burger bg-amber-500  rounded-md fadeinfast">
              <hr className="absolute left-0 w-52 border-1 border-black" />

              <hr className="absolute left-0 w-52 border-1 border-black " />
              <li>
                <button
                  className="text-left  w-52 p-3 font-bold  hover:bg-orange-200 "
                  onClick={() => setSupportOpen(!supportOpen)}
                  ref={dropdownSupportRef2}
                >
                  {t("header.support")}
                </button>
              </li>
              <hr className="absolute left-0 w-52 border-1 border-black " />
              <li>
                <button
                  className="text-left w-52 p-3 font-bold hover:bg-orange-200"
                  onClick={() => navigate("/compedium")}
                >
                  {t("header.guestbook")}
                </button>
              </li>
              <hr className="absolute left-0 w-52 border-1 border-black " />
              <li>
                <button
                  className="text-left w-52 p-3 font-bold hover:bg-orange-200"
                  onClick={() => navigate("/installation")}
                >
                  {t("header.installation")}
                </button>
              </li>
              <hr className="absolute left-0 w-52 border-1 border-black " />
              <li>
                <button
                  className="text-left w-52 p-3 font-bold hover:bg-orange-200"
                  onClick={() => setDownloadOpen(!isDownloadOpen)}
                  ref={dropdownDownloadRef1}
                >
                  {t("header.download")}
                </button>
              </li>
            </ul>
          )}

          {/* <------ END OF BURGER MENU  ------------------> */}

          <div className="mr-10 ">
            <button
              className=" text-center inline-flex items-center text-sm font-bold px-5 py-3 leading-none  border-2 rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-0 hideOnMobile"
              onClick={() => setDownloadOpen(!isDownloadOpen)}
              type="button"
              ref={dropdownDownloadRef2}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
              {t("header.download")}
            </button>
            <div
              className={`fixed mt-1 mr-2 bg-gray-700 rounded-lg dark:bg-gray-700 shadow w-60 download-mobile fadeinfast ${
                isDownloadOpen ? "block" : "hidden"
              }`}
            >
              <ul className="py-2 text-sm text-white ">
                <li>
                  <button
                    onClick={(e) => {
                      handleLobos();
                      e.stopPropagation();
                    }}
                    className="w-60 px-4 py-2 hover:bg-gray-500 "
                  >
                    G2NK Lobos
                  </button>
                </li>
                <hr className="w-60 border-1 border-gray-600" />
                <li>
                  <button
                    onClick={(e) => {
                      handleLobosUltra();
                      e.stopPropagation();
                    }}
                    className="w-60 block pl-4 py-2 pr-3 hover:bg-gray-500 "
                  >
                    G2NK Lobos <span className="text-red-400">Ultra+ </span>
                  </button>
                </li>
                <hr className="w-60 border-1 border-gray-600" />
                <li>
                  <button
                    onClick={(e) => {
                      handleLobosDefinitiveEdition();
                      e.stopPropagation();
                    }}


                
                    className="w-60 block px-4 py-2 hover:bg-gray-500 "
                  >
                    G2NK Lobos Definitive Edition
                  </button>
                </li>
                <hr className="w-60 border-1 border-gray-600" />
                <li>
                  <button
                    onClick={(e) => {
                      handleResourceManager();
                      e.stopPropagation();
                    }}
                    className="w-60 block px-4 py-2 hover:bg-gray-500 "
                  >
                    Resource Manager
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex w-32 ml-auto">
            <img
              src={options[selected].image}
              className="w-13 h-10 pr-3 self-center"
            />

            <select
              value={selected}
              onChange={mainHandleChange}
              className="rounded-xl h-8 self-center border-amber-900 border-2"
            >
              {options.map((option, index) => (
                <option key={option.value} value={index}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <Modal
          closeModal={setModalOpen}
          moddb={moddb}
          googleDrive={googleDrive}
          version={title}
        />
      )}
    </div>
  );
};

export default Header;
