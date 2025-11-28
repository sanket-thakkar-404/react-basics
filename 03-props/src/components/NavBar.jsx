import React from "react";

const NavBar = () => {
  return (
    <nav className="text-2xl bg-zinc-800 p-5 mb-5 flex justify-between rounded-2xl">
      <div className="logo flex gap-3 items-center">
        <div className="w-10 bg-amber-200 rounded-lg text-2xl font-sans h-10"></div>
        <h3>sanket thakkar</h3>
      </div>
      <div className="nav-items flex justify-between gap-10 nav items-center">
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact Us</li>
        <div className="btn flex gap-3 items-center">
        <a href="#" className="bg-blue-500 px-5 py-2 rounded-lg">login</a>
        <a href="#" className="bg-white px-5 py-2 text-black rounded-lg">Signup</a>
      </div>
    
      </div>
      
    </nav>
  );
};

export default NavBar;
