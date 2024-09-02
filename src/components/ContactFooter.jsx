import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  // faEnvelope, // Import the envelope icon for email
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import the envelope icon
import styles from "./ContactFooter.module.css";

function ContactFooter() {
  return (
    <footer className={styles.footer}>
      {/* <h2 className={styles.heading}>CONTACT</h2> */}
      <div className={styles.socialLinks}>
        <a
          href="https://github.com/sreyas-cheviri"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
        <a
          href="https://linkedin.com/in/sreyascheviri"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
        <a
          href="https://twitter.com/sreyascheviri"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
        </a>
        <a
          href="https://instagram.com/sreyascheviri"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </a>
        <a href="mailto:sreyascheviri@gmail.com" className={styles.iconLink}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        </a>
      </div>
    </footer>
  );
}

export default ContactFooter;
