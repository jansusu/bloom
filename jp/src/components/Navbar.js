import React from "react";
import { Link } from "react-router-dom";
import { LuUserSquare2 } from "react-icons/lu";
import Bloomslogo from "../images/Bloomslogo.png";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Bloomslogo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Men
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/twm">
                      Topwear
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/iwm">
                      Indian And Festive Wear
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/bwm">
                      Bottomwear
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/fwm">
                      Footwear
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Women
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/iww">
                      Indian And Fusion Wear
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/www">
                      Western Wear
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/sww">
                      Sports And Active Wear
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/fww">
                      Footwear
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Kids
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/bk">
                      Boys Clothings
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/gk">
                      Girls Clothings
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/fk">
                      Footwear
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/tk">
                      Toys & Games
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Beauty
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/hb">
                      Hair Care
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sb">
                      Skin Care
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/mb">
                      Makeup
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/fb">
                      Fragrances
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <LuUserSquare2 />
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/si">
                      Sign-in
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/li">
                      Log-in
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/">
                      Log-out
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search for brands and more"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
