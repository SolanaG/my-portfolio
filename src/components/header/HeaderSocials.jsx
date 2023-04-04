import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/solana-g%C3%B3mez-2b2204220/"
        target="_blank"
        rel="noreferer noreferrer"
      >
        <FiLinkedin />
      </a>
      <a
        href="https://github.com/SolanaG"
        target="_blank"
        rel="noreferer noreferrer"
      >
        <FiGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
