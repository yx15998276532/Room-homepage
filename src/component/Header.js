import React from "react";

import "../styles/header.css";
export default function Header(props) {
  return (
    <div className="header">
      <div className="header-room">
        <div
          className="header-hamburger"
          onClick={() => props.handleHamburger()}
        >
          <svg
            className="hamburger"
            width="20"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
              fill="#FFF"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <h2 className="room">room</h2>
      </div>
      <div className="header-list">
        <div className="header-close">
          <svg
            className="close"
            onClick={() => props.handleClose()}
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
              fill="#000"
              fill-rule="evenodd"
              opacity=".201"
            />
          </svg>
        </div>
        <a href="#home" className="home">
          home
          <li className="active-line"></li>
        </a>
        <a href="#shop" className="shop">
          shop
          <li className="active-line"></li>
        </a>
        <a href="#about" className="about">
          about
          <li className="active-line"></li>
        </a>
        <a href="#contact" className="contact">
          contact
          <li className="active-line"></li>
        </a>
      </div>
    </div>
  );
}
