import React from "react";
import "./Card.css";

const Header = props => {
  return (
    <div className="card-container">
      <div className="card">
        <h1>Midnight</h1>
        <div className="circle"> </div>
        <h3>Get Code</h3>
      </div>
      <div className="card">
        <h1>Skyline</h1>
        <div className="circle2"> </div>
        <h3>Get Code</h3>
      </div>
      <div className="card">
        <h1>Planets</h1>
        <div className="circle3"> </div>
        <h3>Get Code</h3>
      </div>
      <div className="card">
        <h1>purple haze</h1>
        <div className="circle4"> </div>
        <h3>Get Code</h3>
      </div>
      <div className="card">
        <h1>carbon fiber</h1>
        <div className="circle5"> </div>
        <h3>Get Code</h3>
      </div>
      <div className="card">
        <h1>sunrise</h1>
        <div className="circle6"> </div>
        <h3>Get Code</h3>
      </div>
    </div>
  );
};

export default Header;
