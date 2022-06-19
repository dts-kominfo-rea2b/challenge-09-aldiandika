// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="base-container">
        <div className="title">Call a friend</div>
        <div className="subtitle">Your friendly contact app</div>
      </div>
    </>
  );
};

export default Header;
