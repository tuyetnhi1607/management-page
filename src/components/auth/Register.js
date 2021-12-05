import React, { useState } from "react";
import { connect } from "react-redux";
import { registerAuthAction } from "../../redux/action/AuthAction";
import { useNavigate } from "react-router";

function Register(props) {
  const { register } = props;
  const history = useNavigate();
  const [registerState, setRegisterState] = useState({});
  console.log("register", registerState);
  return (
    <div className="register">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          register(registerState, history);
        }}
      >
        <h1>Register Form</h1>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            const name = e.target.value;
            setRegisterState({ ...registerState, ...{ name } });
          }}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            const email = e.target.value;
            setRegisterState({ ...registerState, ...{ email } });
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            const password = e.target.value;
            setRegisterState({ ...registerState, ...{ password } });
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
    register: (state, history) => {
      dispatch(registerAuthAction(state, history));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
