import React, { useRef } from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom"; 
import logo from '../../../assets/burgerking.png'
import logo1 from "../../../assets/logo1.png";
import logo2 from "../../../assets/logo2.png";
import "boxicons";

function Navbar() { 
  const location = useLocation();
  console.log(location.pathname, "ghghgh");
  return (
    <div
      className="navbar"
    >
      <div className="navbar-logo">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-list">
        <ul>
          <Link to="/">
            <li className={`navbar-list-item ${location.pathname === '/' ? 'active' :''}`} id="/">
              <i className="bx bxs-home"></i>
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/products">
            <li className={`navbar-list-item ${location.pathname === '/products' ? 'active' :''}`} id="/products">
              <i className="bx bx-food-menu"></i>
              <span>Products</span>
            </li>{" "}
          </Link>
          <Link to="/list-users">
            {" "}
            <li className={`navbar-list-item ${location.pathname === '/list-users' ? 'active' :''}`} id="/list-users">
              <i className="bx bxs-user-rectangle"></i>
              <span>List Users</span>
            </li>{" "}
          </Link>
          <Link to="/list-orders">
            {" "}
            <li className={`navbar-list-item ${location.pathname === '/list-orders' ? 'active' :''}`}>
              <i className="bx bx-clipboard"></i>
              <span>List Orders</span>
            </li>{" "}
          </Link>
          <Link to="/setting">
            {" "}
            <li className={`navbar-list-item ${location.pathname === '/setting' ? 'active' :''}`}>
              <i className="bx bxs-wrench"></i>
              <span>Setting</span>
            </li>{" "}
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
