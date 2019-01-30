import React from "react";
import selfie from "../img/drocksmall.jpg";
import "./Header.css";

const Header = props => {
  return (
    <div className="header-container">
      <img src={selfie} alt="selfie" className="selfie" />
      <h1 className="gradient-text">My_Gradients</h1>
    </div>
  );
};

export default Header;
