import React from "react";
import Button from "./Button";
import "../styles/photo.css";
import Header from "./Header";

export default function Photo(props) {
  function handleClose() {
    const list = document.querySelector(".header-list");
    list.classList.remove("header-active");
  }
  function handleHamburger() {
    const list = document.querySelector(".header-list");
    list.classList.add("header-active");
  }
  return (
    <section className="photo">
      <div className="photo-active">
        <img src={props.src} alt="" />
        <Header handleClose={handleClose} handleHamburger={handleHamburger} />
        <div className="photo-active-right">
          <h1>{props.title}</h1>
          <p>{props.text}</p>

          <pre className="shop">
            S H O P {`  `} N O W {"   "}
            <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                fill="hsl(0, 0%, 63%)"
                fillRule="nonzero"
              />
            </svg>
          </pre>
          <Button handleAdd={props.handleAdd} handlePare={props.handlePare} />
        </div>
      </div>
      <div className="photo-footer">
        <img src={props.imgLeft} alt="" />
        <div className="photo-footer-middle">
          <h3>ABOUT OUR FURNITURE</h3>
          <p>
            Our multifunctional collection blends design and function to suit
            yourindividual taste. Make each room unique, or pick a cohesive
            theme that bestexpress your interests and what inspires you. Find
            the furniture pieces youneed, from traditional to contemporary
            styles or anything in between. <br />
            Product specialists are available to help you create your dream
            space.
          </p>
        </div>
        <img src={props.imgRight} alt="" />
      </div>
    </section>
  );
}
