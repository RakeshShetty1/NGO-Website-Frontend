// import { useRef, useState } from "react";

// const ContactUsForm = () => {
//   let formRef = useRef();
//   let [isSuccess, setIsSuccess] = useState(false);
//   let [isError, setIsError] = useState(false);

//   let [user, setUser] = useState({
//     username: "",
//     email: "",
//     message: "",
//   });

//   let handlerUsernameAction = (e) => {
//     let newuser = { ...user, username: e.target.value };
//     setUser(newuser);
//   };

//   let handlerEmailAction = (e) => {
//     let newuser = { ...user, email: e.target.value };
//     setUser(newuser);
//   };

//   let handlerMessageAction = (e) => {
//     let newuser = { ...user, message: e.target.value };
//     setUser(newuser);
//   };

//   let sendAction = async () => {
//     // BACKEND
//     try {
//       formRef.current.classList.add("was-validated");
//       let formStatus = formRef.current.checkValidity();
//       if (!formStatus) {
//         return;
//       }

//       // BACKEND
//       let url = `http://localhost:4000/send-message?username=${user.username}&email=${user.email}&message=${user.message}`;

//       let res = await fetch(url);

//       if (res.status != 200) {
//         let serverMsg = await res.text();
//         throw new Error(serverMsg);
//       }

//       let newuser = {
//         username: "",
//         email: "",
//         message: "",
//       };
//       setUser(newuser);

//       formRef.current.classList.remove("was-validated");

//       alert("success");
//       setIsSuccess(true);
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
//     <div style={{ padding: "25px" }}>
//       <div>
//         <div className="row">
//           <div className="col-md-7 col-sm-12 col-form">
//             <h2 style={{ margin: "10px" }}>Connect With Us</h2>
//             <hr />

//             <form ref={formRef}>
//               <div className="row">
//                 <div className="col-md-6" style={{ margin: "0px" }}>
//                   <input
//                     type="text"
//                     name="name"
//                     className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
//                     placeholder="Name*"
//                     required=""
//                     value={user.username}
//                     onChange={handlerUsernameAction}
//                   />
//                 </div>

//                 <div className="col-md-6" style={{ margin: "0 px" }}>
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control  shadow p-3 mb-5 bg-body-tertiary rounded"
//                     placeholder="E-mail*"
//                     required=""
//                     value={user.email}
//                     onChange={handlerEmailAction}
//                   />
//                 </div>
//               </div>

//               <div style={{ margin: "0 px" }}>
//                 <textarea
//                   name="message"
//                   rows="5"
//                   className="form-control  shadow p-3 mb-5 bg-body-tertiary rounded"
//                   placeholder="Message*"
//                   required=""
//                   value={user.message}
//                   onChange={handlerMessageAction}
//                 ></textarea>
//               </div>

//               <div style={{ margin: "3px" }}>
//                 <input
//                   type="button"
//                   value="&#x2764; Send Message"
//                   className="btn btn-success pull-right shadow p-3 mb-5  rounded"
//                   onClick={sendAction}
//                 />
//               </div>

//               <div className="clearfix"></div>
//             </form>
//             {isSuccess && <div className="alert alert-success">Success</div>}
//             {isError && <div className="alert alert-danger">Error</div>}
//           </div>

//           <div className="col-md-4 col-md-offset-1" style={{ padding: "10px" }}>
//             <h2>Contact us</h2>
//             <hr />

//             <div>
//               <ul>
//                 <li>
//                 JAK Compound, Dadoji Konddeo Cross Lane, Byculla, Mumbai 400027
//                 </li>
//                 <li className="contact-item">+91-8928991161</li>

//                 <li>write2us@akshayachaitanya.org</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUsForm;

import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsForm = () => {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  let handlerUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let handlerMessageAction = (e) => {
    let newuser = { ...user, message: e.target.value };
    setUser(newuser);
  };

  let sendAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      let url = "http://localhost:9090/contactUs";
      let data = {
        name: user.username,
        email: user.email,
        message: user.message,
      };

      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        let newUser = {
          username: "",
          email: "",
          message: "",
        };
        setUser(newUser);
        toast.success("Thank you for contacting us");
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 1000);
        formRef.current.reset();
        formRef.current.classList.remove("was-validated");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      toast.error(err.message);
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    }
  };

  return (
    <div style={{ padding: "25px" }}>
      <div>
        <div className="row">
          <div className="col-md-7 col-sm-12 col-form">
            <h2 style={{ margin: "10px" }}>Connect With Us</h2>
            <hr />

            <form ref={formRef} className="needs-validation">
              <div className="row">
                <div className="col-md-6" style={{ margin: "0px" }}>
                  <input
                    type="text"
                    name="name"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    placeholder="Name*"
                    required
                    value={user.username}
                    onChange={handlerUsernameAction}
                  />
                </div>

                <div className="col-md-6" style={{ margin: "0 px" }}>
                  <input
                    type="email"
                    name="email"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    placeholder="E-mail*"
                    required
                    value={user.email}
                    onChange={handlerEmailAction}
                  />
                </div>
              </div>

              <div style={{ margin: "0 px" }}>
                <textarea
                  name="message"
                  rows="5"
                  className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                  placeholder="Message*"
                  required
                  value={user.message}
                  onChange={handlerMessageAction}
                ></textarea>
              </div>

              <div style={{ margin: "3px" }}>
                <input
                  type="button"
                  value="Send Message"
                  className="btn btn-success pull-right shadow p-3 mb-5 rounded"
                  onClick={sendAction}
                />
              </div>

              <div className="clearfix"></div>
            </form>
            <ToastContainer />
          </div>

          <div className="col-md-4 col-md-offset-1" style={{ padding: "10px" }}>
            <h2>Contact us</h2>
            <hr />

            <div>
              <ul>
                <li>
                  JAK Compound, Dadoji Konddeo Cross Lane, Byculla, Mumbai
                  400027
                </li>
                <li className="contact-item">+91-8928991161</li>
                <li>write2us@akshayachaitanya.org</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
