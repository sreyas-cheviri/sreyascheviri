import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1Xdl0Ydf-IZON08MtueXrn-huONFYDNAZ/view?usp=drive_link"
            target="blank"
          >
            Resume
          </a>
        </li>
      </ul>
      <ul className={styles.navLinks}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a
            href="#contact"
            target="blank"
          >
            Contact
          </a>
        </li>
      </ul>

      <ul className={styles.navLinks2}>
        <li>
          <a href="/work">Work</a>
        </li>
        <li>
          <a href="#play">Play</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
