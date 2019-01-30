import React from "react";
import "./Card.css";

const Header = props => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="circle"> </div>
      </div>
      <div className="card">
        <div className="circle"> </div>
      </div>
      <div className="card">
        <div className="circle"> </div>
      </div>
    </div>
  );
};

export default Header;
