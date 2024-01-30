import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className='text-xl text-slate-400 font-light text-center fixed bottom-0 p-2 w-screen'>
        Copyright ⓒ {year}
      </p>
    </footer>
  );
};

export default Footer;
