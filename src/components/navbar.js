import favicon from "../Images/icons/logo.png";
import Modal from "./modal.js";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/registration") {
    return null; // Hide the Navbar for login and register pages
  }
  return (
    <div style={{ marginBottom: "80px" }}>
      <nav className="navbar fixed-top  navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={favicon} width="170px" alt="" />
          <a className="navbar-brand fs-3" href="#">
            <strong></strong>
          </a>
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
              <li className="nav-item fs-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item fs-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/aboutUS"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item fs-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contactUs"
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item fs-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/volunteer-registration"
                >
                  Volunteer
                </Link>
              </li>

              <li className="nav-item dropdown fs-5">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Campaigns
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/swasthya-ahara"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <a className="dropdown-item " href="#">
                        Swasthya Ahar
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/paushtik-ahara"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <a className="dropdown-item " href="#">
                        Paushtik Ahar
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/bal-shiksha-ahara"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <a className="dropdown-item" href="#">
                        Bal Shiksha Ahar
                      </a>
                    </Link>
                  </li>
                  <li></li>
                </ul>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-success fs-5"
              onClick={() => {
                window.location.href = "http://localhost:3000/donation";
              }}
            >
              &#x2764; Donate
            </button>
          </div>
        </div>
      </nav>
      <Modal />
    </div>
  );
};

export default Navbar;
