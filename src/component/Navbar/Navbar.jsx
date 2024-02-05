import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"

export default class Navbar extends Component {
  render() {
    return (
    <>
    <nav className="navbar navbar-expand-lg " id='navbar-ex'>
    <Link className="navbar-brand text-white fw-bold fs-1 px-5 mx-5" to="home">START FRAMEWORK</Link>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-4 fw-bold ">
        <li className="nav-item">
          <NavLink className="nav-link text-white fs-5 px-3 " to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white fs-5 px-3" to="port">PORTFOLIO</NavLink>
        </li>  <li className="nav-item">
          <NavLink className="nav-link text-white fs-5 px-3" to="contact">CONTACT</NavLink>
        </li>

      </ul>
 
  </div>
</nav>
  </>
    )
  }
}