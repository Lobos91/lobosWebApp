import React from "react";

const Footer = () => {
  return (
    <footer className="z-40 fixed bottom-0 w-full left-0 ">
      <hr className="  styledHr " />
      <div className="h-9 bg-gray-900 text-center text-sm pt-2">
        <span className="text-white mt-1 animate-pulse">&#169; 2023 </span>
        <span className="text-red-500 animate-pulse">
          <a href="https://github.com/Lobos91?tab=repositories">Lobos</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
