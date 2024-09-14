import React from "react";
import styles from "./HomePage.module.css";
import heroImage from "../assets/pic2023.png";
import earthImage from "../assets/earth.svg";

function HomePage() {
  return (
    <div  className={styles.topdiv}>
      <section  className={styles.topSection}>
        <h1  className={styles.heading}>Sreyas Cheviri</h1>

        <div className={styles.earthContainer}>
          <img src={earthImage} alt="Star" className={styles.earthImage} />
        </div>
        <p className={styles.description}>
          Welcome to My Corner of the Internet!
          <br />
          <br />I love building things.
        </p>
        <div className={styles.earthContainer2}>
          <img src={earthImage} alt="Star" className={styles.earthImage} />
        </div>
      </section>

      <section id="about" className={styles.contentSection}>
        {/* <img src={heroImage} alt="Description" className={styles.image} /> */}
        <div className={styles.textContainer}>
          <p className={styles.contentText}>
            I’m passionate about crafting digital products. With skills in
            React, HTML, CSS, Node.js, Express, MongoDB, SQL, and Java, . I love
            exploring new ideas and pushing the boundaries of what’s possible in
            the digital world.
            <br /> I'm an Information Science Engineering student & web
            developer from Bangalore, India.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
