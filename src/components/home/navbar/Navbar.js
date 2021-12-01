import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import logo1 from "../../../assets/logo1.png";
import logo2 from "../../../assets/logo2.png";
import "boxicons";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo1} alt="" />
      </div>
      <div className="navbar-list">
        <ul>
          <Link to="/">
            <li className="navbar-list-item">
              <i class="bx bxs-home"></i>
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/products">
            <li className="navbar-list-item">
              <i class="bx bx-food-menu"></i>
              <span>Products</span>
            </li>{" "}
          </Link>
          <Link to="/list-users">
            {" "}
            <li className="navbar-list-item">
              <i class="bx bxs-user-rectangle"></i>
              <span>List Users</span>
            </li>{" "}
          </Link>
          <Link to="/list-orders">
            {" "}
            <li className="navbar-list-item">
              <i class="bx bx-clipboard"></i>
              <span>List Orders</span>
            </li>{" "}
          </Link>
          <Link to="/">
            {" "}
            <li className="navbar-list-item">
              <i class="bx bxs-wrench"></i>
              <span>Setting</span>
            </li>{" "}
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
