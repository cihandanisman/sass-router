import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
  const navigate = useNavigate();


  return (
    <div>
      <nav class="nav">
        <ul class="nav__list">
          <li onClick={() => navigate("/")} class="nav__item nav__link">
            Home
          </li>
          <li
            onClick={() => navigate("/about")}
            class="nav__link nav__item"
          >
            About
          </li>
          <li onClick={() => navigate("/projects")} class="nav__item nav__link">
            My Projects
          </li>
          <li onClick={() => navigate("/contact")} class="nav__item nav__link">
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
