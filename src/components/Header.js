import React from "react";
import { SiDarkreader } from "react-icons/si";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=KoHo:wght@700&display=swap');
      </style>
      <h1 className="product">écrire</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save dmode"
      >
        <SiDarkreader className="dmode-icon" size="2em" />
      </button>
    </div>
  );
};

export default Header;
