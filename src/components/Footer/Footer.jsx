import React from "react";

const Footer = () => {
  const CurrentYeaer = new Date().getFullYear();
  return (
    <footer className="w-full h-10 bg-gray-600 fixed left-0 bottom-0 flex justify-center items-center">
      Copyright Written by Pooria Asiabi {CurrentYeaer}
    </footer>
  );
};

export default Footer;
