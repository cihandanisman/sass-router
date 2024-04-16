import React from "react";
import './Projects.scss'

const Projects = () => {
  return (
    <div>
      <div class="project-bgImg-container">


        <div class="projects__bio-image">
          <h1>My Projects</h1>
        </div>
      </div>

      <main class="projects">
        <div class="projects__items">
          <div class="projects__item">
            <img src="img/project-1.jpg" alt="My Project" />
          </div>

          <div class="projects__item">
            <img src="img/project-2.jpg" alt="My Project" />
          </div>
          <div class="projects__item">
            <img src="img/project-3.jpg" alt="My Project" />
          </div>
          <div class="projects__item">
            <img src="img/project-4.jpg" alt="My Project" />
          </div>

          <div class="projects__item">
            <img src="img/project-5.jpg" alt="My Project" />
          </div>
          <div class="projects__item">
            <img src="img/project-6.jpg" alt="My Project" />
          </div>
        </div>
      </main>

      <footer class="vertical">
        <div class="social-icons">
          <a href="#twitter">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#facebook">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#instagram">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#github">
            <i class="fab fa-github fa-2x"></i>
          </a>
        </div>

        <div class="copyright">&copy; Copyright 2023</div>
      </footer>
    </div>
  );
};

export default Projects;
