import card1 from "../Images/cards/asset 9.webp";
import card2 from "../Images/cards/asset 10.webp";
import card3 from "../Images/cards/asset 11.webp";
import { Link } from "react-router-dom";
import "./cards.css";

const Cards = () => {
  return (
    <div className="card-group m-2">
      <div
        className="card text-light text-center m-2"
        style={{ backgroundColor: "#1e81b0" }}
      >
        <img src={card1} width="" className="card-img-top pb-2" alt="..." />
        <div className="card-footer text-center">
          <small className="text-body-secondary">
            <small className="text-body-secondary">
              <Link to="/swasthya-ahara">
                <input
                  type="button"
                  className="btn btn-success"
                  value="Support Us"
                />
              </Link>
            </small>
          </small>
        </div>
      </div>

      <div
        className="card text-light text-center m-2"
        style={{ backgroundColor: "#1e81b0" }}
      >
        <img src={card2} className="card-img-top pb-2" alt="..." />
        <div className="card-footer text-center">
          <small className="text-body-secondary">
            <small className="text-body-secondary">
              <Link to="/paushtik-ahara">
                <input
                  type="button"
                  className="btn btn-success"
                  value="Support Us"
                />
              </Link>
            </small>
          </small>
        </div>
      </div>

      <div
        className="card text-light text-center m-2"
        style={{ backgroundColor: "#1e81b0" }}
      >
        <img src={card3} className="card-img-top pb-2" alt="..." />
        <div className="card-footer text-center">
          <small className="text-body-secondary">
            <Link to="/bal-shiksha-ahara">
              <input
                type="button"
                className="btn btn-success"
                value="Support Us"
              />
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Cards;
