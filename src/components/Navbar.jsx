import React from "react";

const Navbar = () => {
  const navItems = [
    "Disney plus",
    "shopping",
    "movie",
    "tv",
    "park & resort",
    "music",
    "live & event",
    "game",
    "kids",
    "company information",
  ];
  const disneyLogo =
    "https://lumiere-a.akamaihd.net/v1/images/disney_logo_c77826a6.png";

  return (
    <>
      <div className="logo">
        <a href="/">
          <img src={disneyLogo} alt="" />
        </a>
      </div>
      <div className="nav-links">
        <ul>
          {navItems.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="search" />
      </div>
    </>
  );
};
export default Navbar;
