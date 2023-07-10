
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../Images/icons/background.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Registration() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobileNumber: "", 
  });

  let handleUsernameChange = (e) => {
    let newUser = { ...user, username: e.target.value };
    setUser(newUser);
  };

  let handlePasswordChange = (e) => {
    let newUser = { ...user, password: e.target.value };
    setUser(newUser);
  };

  let handleEmailChange = (e) => {
    let newUser = { ...user, email: e.target.value };
    setUser(newUser);
  };

  let handleMobileChange = (e) => {
    let newUser = { ...user, mobileNumber: e.target.value };
    setUser(newUser);
  };

  let registerAction = async (e) => {
    e.preventDefault();
    let url = "http://localhost:9090/register";
    let data = {
      username: user.username,
      password: user.password,
      email: user.email,
      mobileNumber: user.mobileNumber,
    };

    try {
      let emailCheckUrl = `http://localhost:9090/check-email?email=${user.email}`;
      let emailCheckResponse = await axios.get(emailCheckUrl);

      if (emailCheckResponse.data === true) {
        toast.error(
          "Email is already registered. Please use a different email."
        );
        return;
      }

      let response = await axios.post(url, data);
      console.log(response.data);

      let newUser = {
        username: "",
        password: "",
        email: "",
        mobileNumber: "",
      };
      setUser(newUser);

      toast.success("Registration successful");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      if (err.response && err.response.status === 409) {
        toast.error("Username or email already exists. Please try again.");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 1000);
    }
  };

  return (
    <div
      className="row justify-content-center m-1"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div
        className="col-md-4 col-sm-12 py-4 my-5 rounded"
        style={{
          backgroundColor: "transparent",
          backgroundColor: "rgb(0,0,0)",
          backgroundColor: "rgba(0,0,0, 0.4)",
        }}
      >
        <div
          className="fs-2 my-2 text-center"
          style={{ fontWeight: "bold", color: "white" }}
        >
          Registration Form
        </div>
        <form
          ref={formRef}
          className="needs-validation"
          onSubmit={registerAction}
        >
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="Enter Username"
            value={user.username}
            onChange={handleUsernameChange}
            required
          />
              <input
            type="email"
            className="form-control form-control-lg mb-3"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleEmailChange}
            required
          />

          <input
            type="password"
            className="form-control form-control-lg mb-3"
            placeholder="Enter Password"
            value={user.password}
            onChange={handlePasswordChange}
            required
          />

      

          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="Enter Mobile"
            pattern="[6789][0-9]{9}"
            value={user.mobileNumber} 
            onChange={handleMobileChange}
            required
          />

          <button
            type="submit"
            className="w-100 btn btn-lg btn-success shadow p-2 mb-3"
          >
            Register
          </button>

          <h5 className="mb-3 text-center" style={{ color: "white" }}>
            Already have an Account?
          </h5>
          <Link to="/login">
            <input
              type="button"
              value="Login"
              className="w-100 btn btn-lg btn-danger"
            />
          </Link>
        </form>

        {isSuccess && <div className="alert alert-success">Success</div>}
        {isError && <div className="alert alert-danger">Error</div>}

        <ToastContainer />
      </div>
    </div>
  );
}

export default Registration;
