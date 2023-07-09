import img3 from "./BalShikshaAhara.jpg";
import { Link } from "react-router-dom";

const BalShikshaAhara = () => {
  return (
    <div>
      <img src={img3} className=" w-100 p-2" alt="" />
      <div
        className="p-3 fs-5 text-dark rounded "
        // style={{ backgroundColor: "#A2F9CA" }}
      >
        <p className="px-5 pt-3 pb-1" style={{ textIndent: "80px" }}>
          Breakfast is often called ‘the most important meal of the day, and for
          good reason. As the name suggests, breakfast breaks the overnight
          fasting period. It replenishes the supply of glucose to boost energy
          levels and alertness, while also providing other essential nutrients
          required for good health.
        </p>
        <p className="px-5 pt-1 pb-3" style={{ textIndent: "80px" }}>
          Bal Shiksha Ahara is a free breakfast Programme primarily concentrated
          on providing hot and nutritious breakfast to the underprivileged
          children of Municipal Schools in Mumbai across diverse mediums like
          English, Hindi, Marathi, Gujarati and Urdu.
        </p>
        <h3
          className="row justify-content-center"
          style={{ fontWeight: "bold" }}
        >
          THE ANGANWADI FEEDING PROGRAMME
        </h3>
        <p className="px-5 py-2" style={{ textIndent: "80px" }}>
          Providing access to nutritious food which will go beyond nutrition,
          School breakfast Programme will aid in the enrichment of the
          underprivileged children fostering optimal growth and development.
        </p>
      </div>
      <div>
        <div className="card text-center mt-2">
          <div className="card-body bg-success text-light p-3 mb-2">
            <h5 className="card-title">Your kindness makes someones life.</h5>
            <p className="card-text">
              NEW MOTHERS AND GROWING CHILDREN NEED YOUR SUPPORT. SUPPORT BAL
              SHIKSHA AHARA PROGRAMME AS GENEROUSLY AS YOU CAN.
            </p>

            <Link to="/donation">
              <input
                type="button"
                value=" &#x2764; Donate "
                className=" btn btn-lg btn-warning shadow p-2 mb-3 "
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BalShikshaAhara;
