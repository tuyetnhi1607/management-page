import React, { useState } from "react";
import { connect } from "react-redux";
import { loginAuthAction } from "../../redux/action/AuthAction";
import { useNavigate } from "react-router";
import Header from "../layout/Header";

function Login(props) {
  const { login } = props;
  const history = useNavigate();
  const [loginState, setLoginState] = useState({});
  console.log("login", props)
  return (
    <div className="login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(loginState, history);
        }}
        className="login-form"
      >
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            const email = e.target.value;
            setLoginState({ ...loginState, ...{ email } });
          }}
        />
        <input
          type="text"
          placeholder="pass"
          onChange={(e) => {
            const password = e.target.value;
            setLoginState({ ...loginState, ...{ password } });
          }}
        />
        <button type="submit">Submit</button>
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
