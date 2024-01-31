import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className='text-xl text-slate-400 font-light text-center w-screen'>
        Copyright ⓒ {year}
      </p>
    </footer>
  );
};

export default Footer;
