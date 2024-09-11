import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

    // Function to handle smooth scrolling to the About section
    const scrollToAbout = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    };
  

  const handleClick = () => {
    navigate('/'); // Navigate to the home page first
    setTimeout(() => {
      scrollToAbout(); // Smooth scroll to the About section
    }, 100); // Slight delay to ensure the page has navigated
  };



  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <a onClick={handleClick}>About</a>
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
            // target="blank"
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
