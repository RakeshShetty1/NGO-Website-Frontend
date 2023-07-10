import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import backgroundImage from "./campaigns/backgroundImage1.jpeg";


function VolunteerRegistration() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    state: "",
  });

  let handlerNameAction = (e) => {
    let newuser = { ...user, name: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let handlerMobileAction = (e) => {
    let newuser = { ...user, mobile: e.target.value };
    setUser(newuser);
  };
  let handlerCityAction = (e) => {
    let newuser = { ...user, city: e.target.value };
    setUser(newuser);
  };
  let handlerStateAction = (e) => {
    let newuser = { ...user, state: e.target.value };
    setUser(newuser);
  };

  let registerAction = async (e) => {
    e.preventDefault(); 

    let url = "http://localhost:9090/volunteer-registration";
    let data = {
      name: user.name,
      email: user.email,
      mobileNo: user.mobile,
      city: user.city,
      state: user.state,
    };

    try {
      let response = await axios.post(url, data);
      console.log(response.data);
      let newuser = {
            name: "",
            email: "",
            mobile: "",
            city: "",
            state: "",
          };
          setUser(newuser);
      
      toast.success("Volunteer Added Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while adding volunteer");
    } finally {
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  };

  return (
    <div className="row justify-content-center m-1 "
    style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
        }}>
      <div
        className="col-md-4 col-sm-12 py-5 my-5 rounded shadow p-2 mb-3"
        style={{
          //backgroundColor: "#8EEBCC",
          //backgroundImage: "linear-gradient(#00e64d,#99ffbb)",
          backgroundColor: "transparent",
          backgroundColor: "rgb(0,0,0)",
          backgroundColor: "rgba(0,0,0, 0.4)",
        }}
      >
        <div
          className="fs-2 mb-3 text-center"
          style={{ fontWeight: "bold", color: "white" }}
        >
          Volunteer Registration
        </div>
        <form
          ref={formRef}
          className="needs-validation"
          onSubmit={registerAction}
        >
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="Enter your name"
            pattern="[a-zA-Z\s]+"
            minLength={4}
            value={user.name}
            onChange={handlerNameAction}
            required
          />

          <input
            type="email"
            className="form-control form-control-lg mb-3"
            placeholder="Enter Email"
            value={user.email}
            onChange={handlerEmailAction}
            required
          />
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="Enter mobile"
            pattern="[6789][0-9]{9}"
            value={user.mobile}
            onChange={handlerMobileAction}
            required
          />
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="Enter city"
            pattern="[a-zA-Z\s]+"
            minLength={4}
            value={user.city}
            onChange={handlerCityAction}
            required
          />
          <input
            type="text"
            className="form-control form-control-lg mb-4"
            placeholder="Enter state"
            pattern="[a-zA-Z\s]+"
            minLength={4}
            value={user.state}
            onChange={handlerStateAction}
            required
          />
          <button
            type="submit"
            className="w-100 btn btn-lg btn-success shadow p-2 mb-3"
          >
            Register
          </button>
        </form>

        {isSuccess && <div className="alert alert-success">Success</div>}
        {isError && <div className="alert alert-danger">Error</div>}
      </div>
      <ToastContainer />
    </div>
  );
}

export default VolunteerRegistration;