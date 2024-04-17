
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  

  return (
    <div>
      <nav class="nav">
        <ul class="nav__list">
          <Link to={'/'} class="nav__item nav__link">
            Home
          </Link>
          <Link to={"/about"} class="nav__link nav__item">
            About
          </Link>
          <Link to={"/projects"}  class="nav__item nav__link">
            My Projects
          </Link>
          <Link to={"/contact"} class="nav__item nav__link">
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
