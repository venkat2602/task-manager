import React from "react";
import task from "../assets/task-manager.jpg";
const Header = () => {
  return (
    <div className='p-4 text-center bg-yellow-400 text-white text-2xl font-bold flex justify-center'>
      <img src={task} alt='icon' className='h-10 w-10 p-1 rounded-full'></img>
      <h1>TASK MANAGER</h1>
    </div>
  );
};

export default Header;
