
import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backgroundImage from "./campaigns/backgroundImage.jpeg";

function Donation() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    name: "",
    email: "",
    campaign: "",
    amount: "",
  });
  let handlerNameAction = (e) => {
    let newuser = { ...user, name: e.target.value };
    setUser(newuser);
  };

  let handlerAmountAction = (e) => {
    let newuser = { ...user, amount: e.target.value };
    setUser(newuser);
  };
  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };
  let handleCampaignAction = (e) => {
    let newuser = { ...user, campaign: e.target.value };
    setUser(newuser);
  };
 

  let donateAction = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    let url = "http://localhost:9090/donation";
    let data = {
      name: user.name,
      email: user.email,
      campaign: user.campaign,
      amount: user.amount,
    };

    try {
      let response = await axios.post(url, data);
      console.log(response.data);
      let newuser = {
        name: "",
        email: "",
        campaign: "",
        amount: "",
      };
      setUser(newuser);

      toast.success("Donated Successfully", {
        autoClose: 3000,
        onClose: () => {
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        },
      });
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while donating");
    }
  };

  return (
    <div className="row justify-content-center m-1 "
       style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat"
        }}>
      <div
        className="col-md-4 col-sm-12 py-5 my-5 rounded  
        shadow-lg p-3 mb-5 rounded"
        style={{
          //
          //backgroundImage: "linear-gradient(	#bfff00, #dfff80)",
            backgroundColor: "transparent",
            backgroundColor: "rgb(0,0,0)",
            backgroundColor: "rgba(0,0,0, 0.4)",
        }}
      >
        <div
          className="fs-2 mb-3 text-center"
          style={{ fontWeight: "bold", color: "white" }}
        >
          Donation Form
        </div>
        <form
          ref={formRef}
          className="needs-validation"
          onSubmit={donateAction}
        >
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="Enter Name"
            value={user.name}
            onChange={handlerNameAction}
            required
          />
          <input
            type="email"
            className="form-control form-control-lg mb-3"
            placeholder="Enter Email"
            // pattern="[a-zA-Z\s.]+@[a-zA-Z]+\.[a-zA-Z]+"
            value={user.email}
            onChange={handlerEmailAction}
            required
          />
          <select
            className="form-select form-select-lg mb-3"
            aria-label="Default select example"
            value={user.campaign}
            onChange={handleCampaignAction}
          >
            <option selected>Select Campaign</option>
            <option value="Swasthya Ahara">Swasthya Ahara</option>
            <option value="Paushtik Ahara">Paushtik Ahara</option>
            <option value="Bal Shiksha Ahara">Bal Shiksha Ahara</option>
          </select>
          <input
            type="tel"
            className="form-control form-control-lg mb-5"
            placeholder="Amount"
            pattern="[0-9]+"
            value={user.amount}
            onChange={handlerAmountAction}
            required
          />
          {/* <input
            type="button"
            value=" &#x2764; Donate"
            onClick={donateAction}
            className="w-100 btn btn-lg btn-success shadow p-2 mb-3"
          /> */}
          <button
            type="submit"
            className="w-100 btn btn-lg btn-success shadow p-2 mb-3"
          >
            Donate
          </button>
        </form>
        {isSuccess && <div className="alert alert-success">Success</div>}
        {isError && <div className="alert alert-danger">Error</div>}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Donation;