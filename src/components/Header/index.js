/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./index.css";
export default function Header() {
  return (
    <div>
      <nav className="mobileView">
        <div>
          <img
            className="logo"
            src="https://ik.imagekit.io/xshdqvejgf/Capture.PNG?updatedAt=1728968535527"
          />
        </div>
        <div className="MobileHamburger">
          <p className="Hamburger Hamburger1"></p>
          <p className="Hamburger Hamburger2"></p>
        </div>
      </nav>
      <nav className="DisplayView">
        <div className="logoContainer">
          <img
            className="desktoplogo"
            src="https://ik.imagekit.io/xshdqvejgf/Capture.PNG?updatedAt=1728968535527"
          />
          <h1 className="logoHeading">EthAi</h1>
        </div>
        <div>
          <ul className="listContainer">
            <li>Features</li>
            <li>Why Us</li>
            <li>Tokenomics</li>
            <li>Roadmap</li>
          </ul>
        </div>
        <div className="buttonContainer">
          <button className="login">Log in</button>
          <button className="whitepaper">Whitepaper</button>
        </div>
      </nav>
    </div>
  );
}
