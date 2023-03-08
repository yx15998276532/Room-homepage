import React from "react";
import "../styles/button.css";
export default function Button(props) {
  return (
    <div className="button">
      <button className="btnLeft" onClick={() => props.handlePare()}>
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 0L1 12l12 12"
            stroke="#FFF"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button className="btnRight" onClick={() => props.handleAdd()}>
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 0l12 12L1 24"
            stroke="#FFF"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
