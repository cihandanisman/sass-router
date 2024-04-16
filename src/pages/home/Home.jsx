import React from "react";
import './Home.scss';
import '../../App.scss'



const Home = () => {
  return (
    <div>
      <div class="home-bgImg-container">


        <main class="home">
          <h2>Hi! My Name Is</h2>
          <h1 class="home__name">
            Wednesday <span class="home__name--last">Addams</span>
          </h1>
          <h2>Full Stack Web Developer</h2>
        </main>

        <footer class="horizontal">
          <div class="social-icons">
            <a href="www.github.com">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a href="www.github.com">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="www.github.com">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
            <a href="www.github.com">
              <i class="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div class="copyright">&copy; Copyright 2023</div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
