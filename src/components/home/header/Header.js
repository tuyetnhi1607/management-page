import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./header.scss";
import { logoutAuthAction } from "../../../redux/action/AuthAction";
import { useNavigate } from "react-router";
import Table from "../../table/Table";
import "boxicons";
import avatar from "../../../assets/none-avatar.png";

function Header(props) {
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
  const { user } = JSON.parse(localStorage.auth);
  console.log("user", user);
  const history = useNavigate();
  const { logout } = props;
  const handleDropdown = () => {
    document.getElementById("dropdown").classList.toggle("active");
  };
  return (
    <>
      <div className="header">
        <div className="header-controler">
          <i class="bx bx-left-indent"></i>
        </div>
        <div className="header-account" onClick={handleDropdown}>
          <img src={avatar} alt="" />
          <div>{user.data.userName}</div>
          {/* <button
          onClick={(e) => {
            logout(history);
          }}
        >
          Logout
        </button> */}
        </div>
      </div>
      <div className="dropdown" id="dropdown">
        <div className="dropdown-arrow"></div>
        <ul>
          <li>
            <i class="bx bxs-user-badge"></i>
            <span>Profile</span>
          </li>
          <li>
            <i class="bx bx-wrench"></i>
            <span>Setting</span>
          </li>
          <li>
            <i class="bx bx-log-out-circle"></i>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </>
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
