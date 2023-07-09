import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Thank You!
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Are you a <strong>Proud Supporter</strong> of
            <strong> Ahaarodhaya</strong> ?
          </div>
          <div className="modal-footer">
            <Link to="/login">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Yes, I am
              </button>
            </Link>
            <Link to="/registration">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Not yet, I want to be
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
