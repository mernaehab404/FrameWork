import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
    <div className="contactUs container  ">
<div className="text-center">
<h2 className="fs-1 fw-bold w-50 m-auto mb-2">Contact Section</h2>
      <i className='fa-solid fa-star fs-3'></i>
</div>


      <form className="container w-50 m-auto pt-5 pb-5" >
        <label
          htmlFor="name"
          style={{ display: name.trim() !== "" ? "block" : "none", color: name.trim() !== "" ? "#09c" : "#000" }}
        >
          Name:
        </label>
        <input
          type="text"
          className="form-control mb-5"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
        />

        <label
          htmlFor="age"
          style={{ display: age.trim() !== "" ? "block" : "none" }}
        >
          Age:
        </label>
        <input
          type="number"
          className="form-control mb-5"
          id="age"
          name="age"
          value={age}
          onChange={handleAgeChange}
        />
        <label
          htmlFor="email"
          style={{ display: email.trim() !== "" ? "block" : "none" }}
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="form-control mb-5"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label
          htmlFor="password"
          style={{ display: password.trim() !== "" ? "block" : "none" }}
        >
          Password:
        </label>
        <input
          type="text"
          id="password"
          className="form-control mb-5"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="btn btn-success">Send message </button>
      </form>
    </div>
     
    </>
  );
}
