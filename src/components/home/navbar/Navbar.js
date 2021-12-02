import React, { useRef } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import logo1 from "../../../assets/logo1.png";
import logo2 from "../../../assets/logo2.png";
import "boxicons";

function Navbar() {
  const ref = useRef();
  const img = useRef();

  const handleHoverOver = () => {
    img.current.src = logo1;
  };
  const handleHoverOut = () => {
    img.current.src = logo2;
  };
  return (
    <div
      className="navbar"
      ref={ref}
      onMouseOver={handleHoverOver}
      onMouseOut={handleHoverOut}
    >
      <div className="navbar-logo">
        <img src={logo2} alt="" ref={img} />
      </div>
      <div className="navbar-list">
        <ul>
          <Link to="/">
            <li className="navbar-list-item">
              <i className="bx bxs-home"></i>
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/products">
            <li className="navbar-list-item">
              <i className="bx bx-food-menu"></i>
              <span>Products</span>
            </li>{" "}
          </Link>
          <Link to="/list-users">
            {" "}
            <li className="navbar-list-item">
              <i className="bx bxs-user-rectangle"></i>
              <span>List Users</span>
            </li>{" "}
          </Link>
          <Link to="/list-orders">
            {" "}
            <li className="navbar-list-item">
              <i className="bx bx-clipboard"></i>
              <span>List Orders</span>
            </li>{" "}
          </Link>
          <Link to="/setting">
            {" "}
            <li className="navbar-list-item">
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
