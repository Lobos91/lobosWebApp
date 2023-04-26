import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full left-0 ">
      <hr className="border-1 border-red-400 " />
      <div className="h-9 bg-gray-900 text-center text-sm ">
        <span className="text-white mt-1">&#169; 2023 </span>
        <span className="text-red-500">
          <a href="#">Lobos</a>{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
