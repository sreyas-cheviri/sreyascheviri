import React from "react";
import Navbar from "../components/Navbar"; // Adjust the import path
import ContactFooter from "../components/ContactFooter"; // Adjust the import path
import styles from "./Work.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function WorkPage() {
  const projects = [
    {
      id: 1,
      title: "OPEN-LMS",
      description: "Resource sharing platform....",
      link: "https://github.com/sreyas-cheviri/OPEN-LMS",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description for project 2",
      link: "/projects/project-2",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description for project 3",
      link: "/projects/project-3",
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description for project 4",
      link: "/projects/project-4",
    },
    {
      id: 5,
      title: "Project 5",
      description: "Description for project 5",
      link: "/projects/project-5",
    },
    {
      id: 6,
      title: "Project 6",
      description: "Description for project 6",
      link: "/projects/project-6",
    },
    {
      id: 7,
      title: "Project 7",
      description: "Description for project 7",
      link: "/projects/project-7",
    },
    // Add more projects here
  ];

  return (
    <div>
      <div className={styles.workContainer}>
        {projects.map((project) => (
          <div key={project.id} className={`${styles.projectBox} ${styles[`project-${project.id}`]}`}>
            <div className={styles.details}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className={styles.icon}  />
              </a>
              <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGlobe} className={styles.icon}/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkPage;
