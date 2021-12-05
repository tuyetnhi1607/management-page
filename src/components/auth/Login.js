import React, { useState } from "react";
import { connect } from "react-redux";
import { loginAuthAction } from "../../redux/action/AuthAction";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./auth.scss";

function Login(props) {
  const { login } = props;
  const history = useNavigate();
  const [loginState, setLoginState] = useState({});
  console.log("login", props);
  return (
    <div className="login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(loginState, history);
        }}
        className="login-form"
      >
        {" "}
        <h1>Login Form</h1>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            const email = e.target.value;
            setLoginState({ ...loginState, ...{ email } });
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            const password = e.target.value;
            setLoginState({ ...loginState, ...{ password } });
          }}
        />
        <button type="submit">Submit</button>
        <span style={{fontSize: "20px", color: "rgb(105, 105, 105)"}}>
          Create a account:{" "}
          <Link to="/register">
            <span style={{color: "blue", cursor: "pointer"}}>Register</span>
          </Link>
        </span>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (state, history) => {
      dispatch(loginAuthAction(state, history));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
