import React, { useState } from "react";
import gothic_icon from "../assets/gothic_icon.png";

const Header = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-amber-500 hover:bg-red-600 transition-colors duration-500 p-6 ">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src={gothic_icon} style={{ height: 42, width: 42 }} />
        <span class="font-bold text-3xl tracking-tight text-amber-950">
          othic II Lobos
        </span>
      </div>
      <div class="block lg:hidden">
        <button
          id="burger-menu"
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div id="nav-menu" class="w-full block flex-grow lg:flex lg:w-auto  ">
        <div class="text-base lg:flex-grow mt-3">
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
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-sm font-bold px-5 py-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
          >
            Pobierz
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
