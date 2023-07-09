// import React, { useEffect, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserPen, faUserSlash } from "@fortawesome/free-solid-svg-icons";
// import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function Volunteers() {
//   const [volunteerList, setVolunteerList] = useState([]);

//   useEffect(() => {
//     getVolunteers();
//   }, []);

//   const getVolunteers = async () => {
//     try {
//       const url = "http://localhost:9090/volunteers";
//       const res = await fetch(url);
//       const list = await res.json();
//       setVolunteerList(list);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteVolunteer = async (id) => {
//     try {
//       const confirmDelete = window.confirm(
//         "Do you want to delete this volunteer?"
//       );
//       if (confirmDelete) {
//         const url = `http://localhost:9090/volunteer/${id}`;
//         const res = await fetch(url, {
//           method: "DELETE",
//         });
//         if (res.status === 200) {
//           toast.success("Volunteer deleted successfully");
//           getVolunteers();
//         } else {
//           throw new Error("Failed to delete volunteer");
//         }
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <>
//       <div
//         className="row justify-content-center"
//         style={{ backgroundColor: "#c3e6cb", height: "100vh" }}
//       >
//         <div className="col-sm-12 col-md-11">
//           <h1
//             className="form-control-lg d-flex justify-content-center"
//             style={{ color: "white", backgroundColor: "#28a745" }}
//           >
//             Volunteer List
//           </h1>

//           <div className="form-control">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th scope="col">#</th>
//                   <th scope="col">Name</th>
//                   <th scope="col">Email</th>
//                   <th scope="col">Number</th>
//                   <th scope="col">City</th>
//                   <th scope="col">State</th>
//                   <th scope="col">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {volunteerList.map((volunteer, index) => (
//                   <tr key={volunteer.id}>
//                     <th scope="row">{index + 1}</th>
//                     <td>{volunteer.name}</td>
//                     <td>{volunteer.email}</td>
//                     <td>{volunteer.mobileNo}</td>
//                     <td>{volunteer.city}</td>
//                     <td>{volunteer.state}</td>
//                     <td className="fs-6">
//                       <OverlayTrigger
//                         overlay={
//                           <Tooltip id="tooltip">Delete Volunteer</Tooltip>
//                         }
//                         placement="top"
//                       >
//                         <button
//                           className="btn"
//                           onClick={() => deleteVolunteer(volunteer.id)}
//                           style={{ backgroundColor: "#c3e6cb" }}
//                         >
//                           <FontAwesomeIcon icon={faUserSlash} />
//                         </button>
//                       </OverlayTrigger>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// }

// export default Volunteers;

import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

function Volunteers() {
  const [volunteerList, setVolunteerList] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    getVolunteers();
  }, []);

  const getVolunteers = async () => {
    try {
      const url = "http://localhost:9090/volunteers";
      const res = await fetch(url);
      const list = await res.json();
      setVolunteerList(list);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteVolunteer = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Do you want to delete this volunteer?"
      );
      if (confirmDelete) {
        const url = `http://localhost:9090/volunteer/${id}`;
        const res = await fetch(url, {
          method: "DELETE",
        });
        if (res.status === 200) {
          toast.success("Volunteer deleted successfully");
          getVolunteers();
        } else {
          throw new Error("Failed to delete volunteer");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const editVolunteer = (id) => {
    const volunteer = volunteerList.find((volunteer) => volunteer.id === id);
    setEditUser(volunteer);
    setEditedUser(volunteer);
  };

  const handleCancelEdit = () => {
    setEditUser(null);
  };

  const handleInputChange = (e) => {
    setEditedUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Assuming you are using React

  const handleSaveEdit = async () => {
    try {
      const url = `http://localhost:9090/volunteer/${editUser.id}`;
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedUser),
      });

      if (res.status === 200) {
        toast.success("Volunteer updated successfully");
        setEditUser(null);
        getVolunteers();
      } else {
        throw new Error("Failed to update volunteer");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div
        className="row justify-content-center"
        style={{ backgroundColor: "#c3e6cb", height: "100vh" }}
      >
        <div className="col-sm-12 col-md-11">
          <h1
            className="form-control-lg d-flex justify-content-center"
            style={{ color: "white", backgroundColor: "#28a745" }}
          >
            Volunteer List
          </h1>

          <div className="form-control">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Number</th>
                  <th scope="col">City</th>
                  <th scope="col">State</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {volunteerList.map((volunteer, index) => (
                  <tr key={volunteer.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{volunteer.name}</td>
                    <td>{volunteer.email}</td>
                    <td>{volunteer.mobileNo}</td>
                    <td>{volunteer.city}</td>
                    <td>{volunteer.state}</td>
                    <td className="fs-6">
                      {editUser && editUser.id === volunteer.id ? (
                        <>
                          <input
                            type="text"
                            name="name"
                            value={editedUser.name}
                            onChange={handleInputChange}
                          />
                          <input
                            type="text"
                            name="email"
                            value={editedUser.email}
                            onChange={handleInputChange}
                          />
                          <input
                            type="text"
                            name="mobileNo"
                            value={editedUser.mobileNo}
                            onChange={handleInputChange}
                          />
                          <input
                            type="text"
                            name="city"
                            value={editedUser.city}
                            onChange={handleInputChange}
                          />
                          <input
                            type="text"
                            name="state"
                            value={editedUser.state}
                            onChange={handleInputChange}
                          />
                          <button
                            className="btn"
                            onClick={handleSaveEdit}
                            style={{ backgroundColor: "#c3e6cb", marginLeft:"4px", marginRight:"4px" }}
                          >
                            <FontAwesomeIcon icon={faCheck} />
                          </button>
                          <button
                            className="btn"
                            onClick={handleCancelEdit}
                            style={{ backgroundColor: "#c3e6cb" }}
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </button>
                        </>
                      ) : (
                        <>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip">Edit Volunteer</Tooltip>
                            }
                            placement="top"
                          >
                            <button
                              className="btn"
                              onClick={() => editVolunteer(volunteer.id)}
                              style={{
                                backgroundColor: "#c3e6cb",
                                marginRight: "10px",
                              }}
                            >
                              <FontAwesomeIcon icon={faUserPen} />
                            </button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip">Delete Volunteer</Tooltip>
                            }
                            placement="top"
                          >
                            <button
                              className="btn"
                              onClick={() => deleteVolunteer(volunteer.id)}
                              style={{ backgroundColor: "#c3e6cb" }}
                            >
                              <FontAwesomeIcon icon={faUserSlash} />
                            </button>
                          </OverlayTrigger>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Volunteers;
