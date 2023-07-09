// import { useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import backgroundImage from "../Images/icons/background.jpg";

// function Registration() {
//   const navigate = useNavigate();
//   let formRef = useRef();
//   let [isSuccess, setIsSuccess] = useState(false);
//   let [isError, setIsError] = useState(false);

//   let [user, setUser] = useState({
//     username: "",
//     password: "",
//     email: "",
//     mobile: "",
//     campaign: "",
//     amount: "",
//   });

//   let handlerUsernameAction = (e) => {
//     let newuser = { ...user, username: e.target.value };
//     setUser(newuser);
//   };

//   let handlerPasswordAction = (e) => {
//     let newuser = { ...user, password: e.target.value };
//     setUser(newuser);
//   };

//   let handlerEmailAction = (e) => {
//     let newuser = { ...user, email: e.target.value };
//     setUser(newuser);
//   };

//   let handlerMobileAction = (e) => {
//     let newuser = { ...user, mobile: e.target.value };
//     setUser(newuser);
//   };
//   let handlerAmountAction = (e) => {
//     let newuser = { ...user, amount: e.target.value };
//     setUser(newuser);
//   };

//   let handleCampaignAction = (e) => {
//     let newuser = { ...user, campaign: e.target.value };
//     setUser(newuser);
//   };

//   let registerAction = async () => {
//     try {
//       formRef.current.classList.add("was-validated");
//       let formStatus = formRef.current.checkValidity();
//       if (!formStatus) {
//         return;
//       }

//       let url = `http://localhost:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}&campaign=${user.campaign}&amount=${user.amount}`;

//       let res = await fetch(url);

//       if (res.status != 200) {
//         let serverMsg = await res.text();
//         throw new Error(serverMsg);
//       }

//       let newuser = {
//         username: "",
//         password: "",
//         email: "",
//         mobile: "",
//         campaign: "",
//         amount: "",
//       };
//       setUser(newuser);

//       formRef.current.classList.remove("was-validated");

//       alert("Thank You! Your donation will have a lasting impact, and we are honored to have you as a partner in our efforts.");
//       setIsSuccess(true);
//       navigate("/", { replace: true });
//     } catch (err) {
//       alert("You are already registered with us. Kindly login.");
//       setIsError(true);
//     } finally {
//       setTimeout(() => {
//         setIsSuccess(false);
//         setIsError(false);
//       }, 5000);
//     }
//   };

//   return (
//     <div className="row justify-content-center m-1 "
//      style={{
//         backgroundImage:`url(${backgroundImage})` }}>

//       <div
//         className="col-md-4 col-sm-12 py-4 my-5 rounded"
//         style={{
//            backgroundColor: "transparent",
//            backgroundColor: "rgb(0,0,0)",
//            backgroundColor: "rgba(0,0,0, 0.4)",
//         }}
//       >
//         <div
//           className="fs-2 my-2 text-center"
//           style={{ fontWeight: "bold", color: "white" }}
//         >
//           Registration Form
//         </div>
//         <form ref={formRef} className="needs-validation">
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="Enter username"
//             pattern="[a-zA-Z\s]+"
//             value={user.username}
//             onChange={handlerUsernameAction}
//             required
//           />

//            <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="Enter Email"
//             pattern="[a-zA-Z\s.]+@[a-zA-Z]+\.[a-zA-Z]+"
//             value={user.email}
//             onChange={handlerEmailAction}
//             required
//           />

//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="Enter mobile"
//             pattern="[0-9]{10}"
//             value={user.mobile}
//             onChange={handlerMobileAction}
//             required
//           />

//           <input
//             type="password"
//             className="form-control form-control-lg mb-3"
//             placeholder="Enter password"
//             pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
//             value={user.password}
//             onChange={handlerPasswordAction}
//             required
//           />

//           <input
//             type="button"
//             value="Register"
//             className="w-100 btn btn-lg mb-5"
//             style = {{backgroundColor:"#4dba29",color:"white",}}
//             onClick={registerAction}
//           />
//           <h5 className="mb-3 text-center" style={{ color: "white" }}>
//             Already have an Account?
//           </h5>
//           <Link to="/login">
//             <input
//               type="button"
//               value="Login"
//               className="w-100 btn btn-lg btn-danger"
//             />
//           </Link>
//         </form>

//         {isSuccess && <div className="alert alert-success">Success</div>}
//         {isError && <div className="alert alert-danger">Error</div>}
//       </div>
//     </div>
//   );
// }

// export default Registration;

// let registerAction = async () => {
//   // try {
//   //   formRef.current.classList.add("was-validated");
//   //   let formStatus = formRef.current.checkValidity();
//   //   if (!formStatus) {
//   //     return;
//   //   }

//   let url = "http://localhost:9090/register";
//   let data = {
//     username: user.username,
//     password: user.password,
//     email: user.email,
//     mobileNumber: user.mobileNumber,
//   };
//   try {
//     let response = await axios.post(url, data);
//     console.log(response.data);

//     let newuser = {
//       username: "",
//       password: "",
//       email: "",
//       mobile_no: "",
//     };
//     setUser(newuser);

//     // formRef.current.classList.remove("was-validated");

//     toast.success("Registration successful");
//     // setIsSuccess(true);
//     // navigate("/login");
//   } catch (err) {
//     if (err.response && err.response.status === 409) {
//       toast.error("Username or email already exists. Please try again.");
//     } else {
//       toast.error("Registration failed. Please try again.");
//     }
//     // setIsError(true);
//   } finally {
//     setTimeout(() => {
//       // setIsSuccess(false);
//       // setIsError(false);
//     }, 5000);
//   }
// };

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
    mobileNumber: "", // Updated property name to match the input field
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
    let newUser = { ...user, mobileNumber: e.target.value }; // Updated property name
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
      // Check if the email is already registered
      let emailCheckUrl = `http://localhost:9090/check-email?email=${user.email}`;
      let emailCheckResponse = await axios.get(emailCheckUrl);

      if (emailCheckResponse.data === true) {
        toast.error(
          "Email is already registered. Please use a different email."
        );
        return;
      }

      // Register the user
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
            value={user.mobileNumber} // Updated property name
            onChange={handleMobileChange}
            required
          />

          {/* <input
            type="button"
            value="Register"
            className="w-100 btn btn-lg mb-5"
            style={{ backgroundColor: "#4dba29", color: "white" }}
            onClick={registerAction}
          /> */}
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
