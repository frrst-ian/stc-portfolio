import React from "react";
import './Button.css'

export const Button = ({ onClick ,children}) => {
  return (
    <>
      <div className="btn-div">
        <button onClick={onClick} className="back-button">
          {children}
        </button>
      </div>
    </>
  );
};
