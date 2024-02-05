import React from "react";
import "./Portfolio.css";
export default function Portfolio() {
  return (
    <>
      <div className="container port text-center">
        <h2 className="fs-1 fw-bold w-50 m-auto mb-2">PORTFOLIO COMPONENT</h2>
        <i className="fa-solid fa-star fs-3"></i>

        <div className="row g-4 mb-4 pt-3">
          <div className="col-md-4 position-relative overflow-hidden">
            <div
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <img src="imgs/poert1.png" className="rounded w-100" alt="" />
              <div className="overlay rounded">
                <i className="text-white fa-solid fa-plus fa-6x "></i>
              </div>
            </div>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex={-1}
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <img
                      src="imgs/poert1.png"
                      className="rounded w-100"
                      alt=""
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 position-relative overflow-hidden">
            <div
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop2"
            >
              <img src="imgs/port2.png" className="rounded w-100" alt="" />
              <div className="overlay rounded">
                <i className="text-white fa-solid fa-plus fa-6x "></i>
              </div>
            </div>
            <div
              className="modal fade"
              id="staticBackdrop2"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex={-1}
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <img
                      src="imgs/port2.png"
                      className="rounded w-100"
                      alt=""
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 position-relative overflow-hidden">
            <div
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop3"
            >
              <img src="imgs/port3.png" className="rounded w-100" alt="" />
              <div className="overlay rounded">
                <i className="text-white fa-solid fa-plus fa-6x "></i>
              </div>
            </div>
            <div
              className="modal fade"
              id="staticBackdrop3"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex={-1}
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <img
                      src="imgs/port3.png"
                      className="rounded w-100"
                      alt=""
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 position-relative overflow-hidden">
            <div
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop4"
            >
              <img src="imgs/poert1.png" className="rounded w-100" alt="" />
              <div className="overlay rounded">
                <i className="text-white fa-solid fa-plus fa-6x "></i>
              </div>
            </div>
            <div
              className="modal fade"
              id="staticBackdrop4"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex={-1}
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <img
                      src="imgs/poert1.png"
                      className="rounded w-100"
                      alt=""
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 position-relative overflow-hidden">
            <div
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop5"
            >
              <img src="imgs/port2.png" className="rounded w-100" alt="" />
              <div className="overlay rounded">
                <i className="text-white fa-solid fa-plus fa-6x "></i>
              </div>
            </div>
            <div
              className="modal fade"
              id="staticBackdrop5"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex={-1}
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <img
                      src="imgs/port2.png"
                      className="rounded w-100"
                      alt=""
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 position-relative overflow-hidden">
            <div
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop6"
            >
              <img src="imgs/port3.png" className="rounded w-100" alt="" />
              <div className="overlay rounded">
                <i className="text-white fa-solid fa-plus fa-6x "></i>
              </div>
            </div>
            <div
              className="modal fade"
              id="staticBackdrop6"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex={-1}
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <img
                      src="imgs/port3.png"
                      className="rounded w-100"
                      alt=""
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
