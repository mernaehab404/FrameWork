import React from "react";
import "./About.css";
export default function About() {
  return (
    <>
      <div className="about text-white d-flex justify-content-center align-items-center">
        <div className="about-details">
        <div className="title text-center">
        <h2 className="pt-5 pb-3 fs-1 fw-bold w-50 m-auto ">ABOUT COMPONENT</h2>
      
        <i className="fa-solid fa-star fs-3 "></i>

     
        </div>
        <div className="container row m-auto mt-4">
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
        </div>
      
      </div>
    </>
  );
}
