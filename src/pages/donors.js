import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserPen,
  faUserSlash,
} from "@fortawesome/free-solid-svg-icons";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

function Donors() {
  const [donorList, setDonorList] = useState([]);

  useEffect(() => {
    getDonors();
  }, []);

  const getDonors = async () => {
    try {
      const url = "http://localhost:9090/donors";
      const res = await fetch(url);
      const list = await res.json();
      setDonorList(list);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteDonor = async (id) => {
    try {
      const confirmDelete = window.confirm("Do you want to delete this donor?");
      if (confirmDelete) {
        const url = `http://localhost:9090/donor/${id}`;
        const res = await fetch(url, {
          method: "DELETE",
        });
        if (res.status === 200) {
          toast.success("Donor deleted successfully");
          getDonors();
        } else {
          throw new Error("Failed to delete donor");
        }
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
            Donor List
          </h1>
          <div className="form-control">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Campaign</th>
                  <th scope="col">Amount(in Rs)</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {donorList.map((donor, index) => (
                  <tr key={donor.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{donor.name}</td>
                    <td>{donor.email}</td>
                    <td>{donor.campaign}</td>
                    <td>{donor.amount}</td>
                    <td className="fs-6">
                      <OverlayTrigger
                        overlay={<Tooltip id="tooltip">Delete Donor</Tooltip>}
                        placement="top"
                      >
                        <button
                          className="btn"
                          onClick={() => deleteDonor(donor.id)}
                          style={{ backgroundColor: "#c3e6cb" }}
                        >
                          <FontAwesomeIcon icon={faUserSlash} />
                        </button>
                      </OverlayTrigger>
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

export default Donors;
