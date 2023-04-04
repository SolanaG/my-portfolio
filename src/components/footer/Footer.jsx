/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer__copyright">
        <small>&copy; 2023 | Designed & Coded with</small>
        <AiFillHeart className="footer__copyright-icon" />
        <small>by Sol</small>
      </div>
    </footer>
  );
};

export default Footer;
