import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import favicon from "../Images/icons/logo.png";
import Modal from "./modal.js";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("loginStatus");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loginStatus");
    navigate("/login");
  };

  const handleButtonClick = (path, event) => {
    if (!isLoggedIn) {
      event.preventDefault();
      navigate("/home");
    } else if (!path) {
      event.preventDefault();
    } else {
      navigate(path);
      
    }
  };

  if (
    location.pathname === "/login" ||
    // location.pathname === "/" ||
    location.pathname === "/registration"
  ) {
    return null; // Hide the Navbar for login and register pages
  }

  return (
    <div style={{ marginBottom: "80px" }}>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
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
                  className={`nav-link active ${
                    isLoggedIn ? "" : "disabled-link"
                  }`}
                  aria-current="page"
                  to="/home"
                  onClick={(event) => handleButtonClick("/home", event)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item fs-5">
                <Link
                  className={`nav-link active ${
                    isLoggedIn ? "" : "disabled-link"
                  }`}
                  aria-current="page"
                  to="/aboutUS"
                  onClick={(event) => handleButtonClick("/aboutUS", event)}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item fs-5">
                <Link
                  className={`nav-link active ${
                    isLoggedIn ? "" : "disabled-link"
                  }`}
                  aria-current="page"
                  to="/contactUs"
                  onClick={(event) => handleButtonClick("/contactUs", event)}
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item fs-5">
                <Link
                  className={`nav-link active ${
                    isLoggedIn ? "" : "disabled-link"
                  }`}
                  aria-current="page"
                  to="/volunteer-registration"
                  onClick={(event) =>
                    handleButtonClick("/volunteer-registration", event)
                  }
                >
                  Volunteer
                </Link>
              </li>

              <li className="nav-item dropdown fs-5">
                <a
                  className={`nav-link dropdown-toggle ${
                    isLoggedIn ? "" : "disabled-link"
                  }`}
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
                      <a
                        className={`dropdown-item ${
                          isLoggedIn ? "" : "disabled-link"
                        }`}
                        href="#"
                        onClick={(event) =>
                          handleButtonClick("/swasthya-ahara", event)
                        }
                      >
                        Swasthya Ahar
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/paushtik-ahara"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <a
                        className={`dropdown-item ${
                          isLoggedIn ? "" : "disabled-link"
                        }`}
                        href="#"
                        onClick={(event) =>
                          handleButtonClick("/paushtik-ahara", event)
                        }
                      >
                        Paushtik Ahar
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/bal-shiksha-ahara"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <a
                        className={`dropdown-item ${
                          isLoggedIn ? "" : "disabled-link"
                        }`}
                        href="#"
                        onClick={(event) =>
                          handleButtonClick("/bal-shiksha-ahara", event)
                        }
                      >
                        Bal Shiksha Ahar
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            {isLoggedIn ? (
              <>
                <button
                  type="button"
                  className="btn btn-success fs-5"
                  style={{ marginRight: "5px" }}
                  onClick={() => {
                    window.location.href = "http://localhost:3000/donation";
                  }}
                >
                  &#x2764; Donate
                </button>
                <button
                  type="button"
                  className="btn btn-success fs-5"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </>
            ) : (
              <Link to="/login">
                <button type="button" className="btn btn-success fs-5">
                  Log In
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>

      <Modal />
    </div>
  );
};

export default Navbar;
