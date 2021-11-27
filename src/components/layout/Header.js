import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./layout.scss";
import { logoutAuthAction } from "../../redux/action/AuthAction";
import { useNavigate } from "react-router";
import Table from "../table/Table";

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
  return (
    <div className="header">
      <Link to="/">You</Link>
      {!user.isLogined ? (
        <>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </>
      ) : (
        <>
          <div>{user.data.userName}</div>
          <button
            onClick={(e) => {
              logout(history);
            }}
          >
            Logout
          </button>
          <Table />
        </>
      )}
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
