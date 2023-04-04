import React from "react";
import { BiDownArrow } from "react-icons/bi";

const HeaderScrollDown = () => {
  return (
    <div className="scroll__down">
      <a href="#contact" className="scroll__text">
        Scroll Down
      </a>
      <a href="#contact">
        <BiDownArrow />
      </a>
    </div>
  );
};

export default HeaderScrollDown;
