import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import backgroundImage from "../Images/icons/background.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let loginAction = async (e) => {
    e.preventDefault();

    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // Check if the user credentials match
      let url = "http://localhost:9090/login";
      let data = {
        email: user.email,
        password: user.password,
      };

      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        let result = await response.json();
        if (result) {
          localStorage.setItem("loginStatus", "true");
          if (
            user.email === "rakesh333@gmail.com" &&
            user.password === "rakesh@123"
          ) {
            toast.success("Welcome admin");
            setTimeout(() => {
              navigate("/donors", { replace: true });
            }, 1000);
          } else if (
            user.email === "gitesh122@gmail.com" &&
            user.password === "gitesh@123"
          ) {
            toast.success("Welcome admin");
            setTimeout(() => {
              navigate("/volunteers", { replace: true });
            }, 1000);
          } else {
            toast.success("Login successful");
            setTimeout(() => {
              navigate("/donation", { replace: true });
            }, 1000);
          }
        } else {
          throw new Error("Invalid username or password");
        }
      } else {
        throw new Error("Login failed");
      }
    } catch (err) {
      toast.error(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsError(false);
      }, 1000);
    }
  };

  return (
    <>
      <div
        className="row justify-content-center m-1"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div
          className="col-sm-12 col-md-4 m-5  py-5 rounded shadow-lg p-3 mb-5 rounded"
          style={{
            backgroundColor: "transparent",
            backgroundColor: "rgb(0,0,0)",
            backgroundColor: "rgba(0,0,0, 0.4)",
          }}
        >
          <div
            className="fs-2 mb-3 text-center"
            style={{ fontWeight: "bold", color: "white" }}
          >
            Login Form
          </div>

          <form
            ref={formRef}
            className="needs-validation"
            onSubmit={loginAction}
          >
            <input
              type="email"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Email"
              value={user.email}
              onChange={handlerEmailAction}
              required
            />
            <input
              type="password"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Password"
              value={user.password}
              onChange={handlerPasswordAction}
              required
            />
            <button
              type="submit"
              className="w-100 btn btn-lg mb-5"
              style={{ backgroundColor: "#4dba29", color: "white" }}
            >
              Login
            </button>

            <h5 className="mb-3 text-center" style={{ color: "white" }}>
              Don't have an Account?
            </h5>
            <Link to="/registration">
              <input
                type="button"
                value="Register"
                className="w-100 btn btn-lg btn-danger "
              />
            </Link>
          </form>

          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Login;

// let loginAction = async () => {
//   try {
//     formRef.current.classList.add("was-validated");
//     let formStatus = formRef.current.checkValidity();
//     if (!formStatus) {
//       return;
//     }

//     let url = `http://localhost:4000/login-by-get?email=${user.email}&password=${user.password}`;
//     let res = await fetch(url);

//     if (res.status == 500) {
//       let erroMessage = await res.text();
//       throw new Error(erroMessage);
//     }

//     localStorage.setItem("loginStatus", "true");
//     navigate("/donation", { replace: true });
//   } catch (err) {
//     alert(err.message);
//     setIsError(true);
//   } finally {
//     setTimeout(() => {
//       setIsError(false);
//       setIsSuccess(false);
//     }, 1000);
//   }
// };
