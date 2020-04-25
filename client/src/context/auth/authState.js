import React, { useReducer } from "react";
import AuthReducer from "./authReducer";
import AuthContext from "./authContext";
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    CLEAR_ERRORS,
    LOGOUT,
  } from "../ActionTypes";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const Login = (credentials) => {
      dispatch({type: LOGIN_SUCCESS});
  };
  const LogOut = () => {
    dispatch({type: LOGOUT});
  };
  const Register = () => {
    dispatch({type: REGISTER_SUCCESS});
  };

  return (
    <AuthContext.Provider
      values={{
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        Login,
        LogOut,
        Register,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
