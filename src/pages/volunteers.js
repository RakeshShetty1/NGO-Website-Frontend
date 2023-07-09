import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import img from "../Images/banners/volunteer.png";

function Voluteers() {
  // const [userList, setUserList] = useState([]);

  // useEffect(() => {
  //   getAllUserAction();
  // }, []);

  // const getAllUserAction = async () => {
  //   let url = `http://localhost:4000/find-all-volunteer`;
  //   let res = await fetch(url);
  //   let list = await res.json();

  //   setUserList([...list]);
  // };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-11">
          <div className="row justify-content-between">
            <img src={img} className="d-block w-100" alt="..." />
            <p
              className="mt-3 p-3 pb-0"
              style={{
                textIndent: "80px",
                fontSize: "20px",
                fontFamily: "PT Serif, serif",
              }}
            >
              Volunteers are the lifeblood of NGOs, breathing life into their
              missions and driving lasting change. Through their dedication,
              diverse expertise, and unwavering commitment, volunteers create a
              powerful force for good. NGOs recognize and appreciate the immense
              value that volunteers bring to their work, acknowledging that
              without their tireless efforts, the accomplishments and positive
              outcomes achieved would be far more challenging to attain. Let us
              celebrate the incredible contributions of volunteers and continue
              to nurture a society where the spirit of service thrives,
              transforming lives and building a brighter future for all.
            </p>

            <Link to="/volunteer-registration">
              <input
                type="button"
                value="Become a Volunteer"
                className="w-100 btn btn-lg btn-success mb-3"
              />
            </Link>
          </div>
          {/* <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact No</th>
                  <th scope="col">City</th>
                  <th scope="col">State</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((item, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td className="text-capitalize">{item.username}</td>
                  
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td className="fs-5"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Voluteers;
