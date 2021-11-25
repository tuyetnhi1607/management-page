import axios from "axios";

const AuthActionType = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
};

const registerAuthAction = (useState, history) => {
  return async (dispatch) => {
    await axios
      .post("/auth/register", useState)
      .then((res) => {
        const { data } = res;
        console.log("register", data);
        history("/");
        dispatch({
          type: AuthActionType.REGISTER_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const loginAuthAction = (useState, history) => {
  return async (dispatch) => {
    await axios
      .post("/auth/login", useState)
      .then((res) => {
        const { data } = res;
        console.log("login", data);
        history("/");
        dispatch({
          type: AuthActionType.LOGIN_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const logoutAuthAction = (history) => {
    // console.log("logout")
    return async (dispatch) => {
      await axios
        .post("/auth/logout")
        .then((res) => {
          const { data } = res;
          console.log("logout", data);
          history("/");
          dispatch({
            type: AuthActionType.LOGOUT_SUCCESS,
            payload: data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

export { AuthActionType, loginAuthAction, registerAuthAction, logoutAuthAction};
