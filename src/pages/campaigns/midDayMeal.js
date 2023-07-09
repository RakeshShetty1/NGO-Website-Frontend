import img from "./SwasthyaAhara.jpg";
import img1 from "./reachmdm23.jpg";
import img2 from "./childrenssofar.png";
import { Link } from "react-router-dom";

const MidDayMeal = () => {
  return (
    <div>
      <img src={img} className=" w-100 p-2 " alt="" />
      <div
        className="p-5 fs-5 rounded text-center mb-2 "
        // style={{ backgroundColor: "#B2B5F9" }}
      >
        <p>
          Akshaya Chaitanya is an initiative in Mumbai with the objective to
          eradicate hunger in a sustainable and scalable way. We have begun our
          service in the city with the Hospital Feeding Programme in partnership
          with BMC (Brihanmumbai Municipal Corporation) and DMER (Directorate of
          Medical Education & Research), Government of Maharashtra.
        </p>
        <p>
          The biggest irony is, Mumbai, the financial capital ranks the worst on
          hunger index in Maharashtra and urban India. 59.7% of households in
          urban slums of Mumbai are ‘severely food-insecure’ (i.e., they run out
          of food and have to survive without eating for a day or more) Nearly
          50,000 children in Mumbai are severely malnourished and nearly 2,000
          lose their life every year fighting hunger Every 2nd child in Mumbai
          is wasted or stunted which means they either have a low height for
          their age or a low weight for their height
        </p>
        <p>
          When the marginalised sections face any health issue, government
          hospitals are their only option. Monthly income levels of families
          range from ₹7,000 to ₹25,000 only (SEC-D & E) 90% either do not have
          any medical insurance or any savings, making them vulnerable to
          unplanned medical expense1 Majority works on daily wages and lose
          their livelihood during a health crisis in the family2
        </p>
        Our hospital feeding service in Mumbai upholds the health of
        marginalised families as well as reduces their burden of food cost by
        providing nutritious meals every day.
      </div>
      <div className="text-center">
        <Link to="/registration">
          <input
            type="button"
            value=" &#x2764; Donate "
            className=" btn btn-lg btn-success shadow p-2 mb-3"
          />
        </Link>
      </div>
      <img src={img1} className=" w-100 p-2 mb-0" alt="" />
      <img src={img2} className=" w-100 p-2" alt="" />

      <div className="row mb-2 px-2">
        <div className="col-sm-6 mb-sm-0">
          <div className="card">
            <div className="card-body bg-success text-light rounded">
              <h3 className="card-title">Donate Now</h3>
              <p className="card-text">
                Contribute to feed nutritious meals to mid-day meal
                beneficiaries. Gain tax deduction under 80G of income tax act.
              </p>
              <Link to="/registration">
                <input
                  type="button"
                  value=" &#x2764; Donate "
                  className=" btn btn-lg btn-primary shadow p-2 mb-3"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body bg-success text-light rounded">
              <h3 className="card-title">Be a social volunteer</h3>
              <p className="card-text">
                Be a voice of Akshaya Patra by promoting our work on social
                media platforms, like our posts and share with your friends and
                family
              </p>

              <Link to="/volunteers">
                <input
                  type="button"
                  value="DoBe A Volunteer"
                  className=" btn btn-lg btn-primary shadow p-2 mb-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MidDayMeal;
