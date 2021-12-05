import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import "./header.scss";
import { logoutAuthAction } from "../../../redux/action/AuthAction";
import { useNavigate } from "react-router-dom";
import "boxicons";
import avatar from "../../../assets/none-avatar.png";

function Header(props) {
  const ref = useRef();
  const [name, setName] = useState("Home");
  if (!localStorage.getItem("auth")) {
    const init = {
      isLogined: false,
      user: {
        data: {
          userName: "",
          token: "",
        },
      },
    };
    localStorage.auth = JSON.stringify(init);
  }
  const handleDropdown = () => {
    document.getElementById("dropdown").classList.toggle("active");
  };
  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (ref.current && !ref.current.contains(event.target))
        document.getElementById("dropdown").classList.remove("active");
    });
  }, []);
  useEffect(() => {
    if (window.location.pathname === "/products") setName("Products");
    if (window.location.pathname === "/list-users") setName("List User");
    if (window.location.pathname === "/setting") setName("Setting");
    if (window.location.pathname === "/list-orders") setName("list Orders");
    if (window.location.pathname === "/") setName("Home");
  }, [window.location.pathname]);
  const { user } = JSON.parse(localStorage.auth);
  console.log("user", user);
  const history = useNavigate();
  const { logout } = props;

  return (
    <div className="header">
      {/* <div className="header-left">Search</div> */}
      <div className="header-right">
        <div className="header-right-name">{name}</div>
        <div ref={ref} className="header-right-account">
          <i class="bx bxs-bell-ring">
            <div className="bell-badge">6</div>
          </i>
          <div className="header-right-account-name" onClick={handleDropdown}>
            <img src={avatar} alt="" />
            {user.data.userName}
            <i class="bx bxs-down-arrow"></i>
          </div>
        </div>
      </div>
      <div className="dropdown" id="dropdown">
        <div className="dropdown-arrow"></div>
        <ul>
          <li>
            <i className="bx bxs-user-badge"></i>
            <span>Profile</span>
          </li>
          <li>
            <i className="bx bx-wrench"></i>
            <span>Setting</span>
          </li>
          <li
            onClick={(e) => {
              logout(history);
            }}
          >
            <i className="bx bx-log-out-circle"></i>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (history) => {
      dispatch(logoutAuthAction(history));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
