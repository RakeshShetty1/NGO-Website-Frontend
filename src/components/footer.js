import { Link } from "react-router-dom";
import backgroundImage from "../Images/Footer/footerImage.webp";
import './footer.css';

const Footer = () => {
  return (
    <footer
      className="blur footer text-light"
      // style={{  backgroundImage: `url(${backgroundImage})`,
      //        backdropFilter:"20px"}}
    >
      <div className="container p-3">
        <div className="row">
          <div className="col-md-6 p-3">
            <h5 style={{ color: "#006622" }}>About Us</h5>
            <p>
              As an NGO in Mumbai, Akshaya Chaitanya is our attempt to make food
              accessible to the needy across Mumbai by serving them hot,
              nutritious, locally palatable meals prepared at our very own
              state-of-the-art FSSAI compliant kitchen.
            </p>
          </div>


          <div className="col-md-3 p-3">
            <h5 style={{ color: "#009933" }}>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/"  style={{textDecoration:"none",color:"#b8bbc9"}} >Home</Link>
              </li>
              <li>
                <Link to="/aboutUs"  style={{textDecoration:"none",color:"#b8bbc9"}}>About</Link>
              </li>

              <li>
                <Link to="contactUs"style={{textDecoration:"none",color:"#b8bbc9"}} >Contact</Link>
              </li>
            </ul>
          </div>


          <div className="col-md-3 p-3">
            <h5 style={{ color: "#009933" }}>Connect with Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/login.php" target="_blank">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/i/flow/login" target="_blank">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://rohan-kegade.github.io/Projects/"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p>&copy; 2023 Akshaya Chaitanya. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
