import React, { useState } from "react";
import gothic_icon from "../assets/gothic_icon.png";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  const handleDefinitiveEd = () => {
    alert("Prace w toku!");
  };

  return (
    <nav class="flex items-center justify-between flex-wrap bg-amber-500 hover:bg-red-600 hover:font-bold transition-colors duration-500 p-6 ">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src={gothic_icon} style={{ height: 42, width: 42 }} />
        <span class="font-bold text-3xl tracking-tight text-amber-950">
          othic II Lobos
        </span>
      </div>

      <div id="nav-menu" class="w-full block flex-grow lg:flex lg:w-auto  ">
        <div class="text-base lg:flex-grow mt-4">
          <a
            href="#responsive-header"
            class=" block mt-4 lg:inline-block lg:mt-0 text-slate-900 hover:text-white mr-4"
          >
            Dokumentacja
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-slate-900 hover:text-white mr-4"
          >
            Księga gości
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-slate-900 hover:text-white mr-4"
          >
            Patronite
          </a>
        </div>
        <div className="mr-10">
          <button
            onClick={handleDropDown}
            type="button"
            class="text-center inline-flex items-center text-sm font-bold px-5 py-3 leading-none  border-2 rounded  text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
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
              <li>
                <a
                  href="#"
                  class="block pl-4 py-2 pr-3 hover:bg-gray-500 hover:text-white"
                >
                  Gothic 2 Lobos Ultra+
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleDefinitiveEd}
                  class="block px-4 py-2 hover:bg-gray-500 hover:text-white"
                >
                  Gothic 2 Lobos DE (Definitive Edition)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
