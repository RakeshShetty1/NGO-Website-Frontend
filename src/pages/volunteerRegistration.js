import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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

  // let registerAction = async () => {
  //   // try {
  //   //   formRef.current.classList.add("was-validated");
  //   //   let formStatus = formRef.current.checkValidity();
  //   //   if (!formStatus) {
  //   //     return;
  //   //   }

  //   let url = "http://localhost:9090/volunteer-registration";
  //   let data = {
  //     name: user.name,
  //     email: user.email,
  //     mobile: user.mobile,
  //     city: user.city,
  //     state: user.state,
  //   };
  //   let response = await axios.post(url, data);
  //   console.log(response.data);

  //   if (res.status != 200) {
  //     let serverMsg = await res.text();
  //     throw new Error(serverMsg);
  //   }

  //   let newuser = {
  //     name: "",
  //     email: "",
  //     mobile: "",
  //     city: "",
  //     state: "",
  //   };
  //   setUser(newuser);

  //   formRef.current.classList.remove("was-validated");

  //   alert("success");
  //   setIsSuccess(true);
  //   navigate("/volunteers", { replace: true });
  // } catch (err) {
  //   alert("You are already registered with us. Kindly login.");
  //   setIsError(true);
  // } finally {
  //   setTimeout(() => {
  //     setIsSuccess(false);
  //     setIsError(false);
  //   }, 5000);
  // }
  // };
  let registerAction = async (e) => {
    e.preventDefault(); // Prevent the default form submission

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
      setTimeout(() => {}, 2000);
    }
  };

  return (
    <div className="row justify-content-center m-5 ">
      <div
        className="col-md-4 col-sm-12 py-5 my-5 rounded shadow p-2 mb-3"
        style={{
          backgroundColor: "#8EEBCC",
          backgroundImage: "linear-gradient(#00e64d,#99ffbb)",
        }}
      >
        <div
          className="fs-2 mb-3 text-center"
          style={{ fontWeight: "bold", color: "" }}
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
            value={user.name}
            onChange={handlerNameAction}
            required
          />

          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="Enter Email"
            pattern="[a-zA-Z\s.]+@[a-zA-Z]+\.[a-zA-Z]+"
            value={user.email}
            onChange={handlerEmailAction}
            required
          />
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="Enter mobile"
            pattern="[0-9]{10}"
            value={user.mobile}
            onChange={handlerMobileAction}
            required
          />
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="Enter city"
            pattern="[a-zA-Z\s]+"
            value={user.city}
            onChange={handlerCityAction}
            required
          />
          <input
            type="text"
            className="form-control form-control-lg mb-4"
            placeholder="Enter state"
            pattern="[a-zA-Z\s]+"
            value={user.state}
            onChange={handlerStateAction}
            required
          />
          {/* Replace the <input> element */}
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
