import React, { useState, useEffect, useRef } from "react";
import gothic_icon from "../assets/gothic_icon.png";
import paypal from "../assets/paypal.png";
import patronite from "../assets/patronite.png";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const dropdownRef = useRef(null);



  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  const handleSupport = () => {
    setSupportOpen(!supportOpen);
  };

  const handleDefinitiveEd = () => {
    alert("Prace w toku!");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
      setSupportOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-amber-500 hover:bg-red-600 hover:font-bold transition-colors duration-500 p-4 ">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img src={gothic_icon} style={{ height: 42, width: 42 }} />
          <span class="font-bold text-3xl tracking-tight text-amber-950">
            othic II Lobos
          </span>
        </div>

        <div id="nav-menu" class="w-full block flex-grow lg:flex lg:w-auto  ">
          <div class="text-base lg:flex-grow mt-4">
            <button
              class=" text-center inline-flex flex-wrap items-center  lg:mt-0 text-slate-900 hover:text-white mr-4 "
              onClick={handleSupport}
              ref={dropdownRef}
            >
              <svg
                class="w-6 h-6 mr-0.5"
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
              Wesprzyj
              <svg
                class="w-4 h-4 ml-0.5"
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
              class={`z-10 fixed ${
                supportOpen ? "block" : "hidden"
              } bg-white rounded-lg shadow w-40 dark:bg-gray-700  `}
            >
              <ul class="h-24 py-2 overflow-y-auto text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href="#"
                    class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <img class="w-6 h-6 mr-2 " src={paypal} alt="Jese image" />
                    PayPal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <img
                      class="w-6 h-6 mr-2 rounded-full"
                      src={patronite}
                      alt="Jese image"
                    />
                    Patronite
                  </a>
                </li>
              </ul>
            </div>

            <a
              href="#responsive-header"
              class="text-center inline-flex flex-wrap items-centerlg:mt-0 text-slate-900 hover:text-white mr-4"
            >
              <svg
                class="w-6 h-6 mr-0.5"
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
              Księga gości
            </a>
          </div>
          <div className="mr-10">
            <button
              onClick={handleDropDown}

              type="button"
              class=" text-center inline-flex items-center text-sm font-bold px-5 py-3 leading-none  border-2 rounded  text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
            >
              <svg
                class="w-5 h-5 mr-2"
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
              Pobieralnia
            </button>
            <div
              class={`z-10 fixed mt-1 mr-2 bg-yellow-400 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-yellow-400 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <ul class="py-2 text-sm text-gray-700 dark:text-black  ">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-500 hover:text-white "
                  >
                    Gothic 2 Lobos
                  </a>
                </li>
                <hr className=" border-1 border-white" />
                <li>
                  <a
                    href="#"
                    class="block pl-4 py-2 pr-3 hover:bg-gray-500 hover:text-white"
                  >
                    Gothic 2 Lobos Ultra+
                  </a>
                </li>
                <hr className=" border-1 border-white" />
                <li>
                  <a
                    href="#"
                    onClick={handleDefinitiveEd}
                    class="block px-4 py-2 hover:bg-gray-500 hover:text-white"
                  >
                    Gothic 2 Lobos Definitive Edition
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <hr className="styledHr" style={{ height: 4 }} />
    </div>
  );
};

export default Header;
