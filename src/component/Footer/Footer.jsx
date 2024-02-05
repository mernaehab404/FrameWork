import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="contact">
          <div className="row">
            <div className="col-md-4">
              <div className="info text-center">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
              </div>   
            </div>
            <div className="col-md-4">
              <div className="info  text-center">
              <h3>AROUND THE WEB</h3>
              <div className="icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-solid fa-basketball"></i>
              </div>
              </div>
             
            </div>
            <div className="col-md-4">
              <div className="info text-center">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
              </div>
             
              
            </div>

          </div>
      
        </div>
        <div className="footer-end text-center fs-5 py-3 text-white">
                <p>Copyright © Your Website 2021</p>
              </div>
    </>
  );
}
