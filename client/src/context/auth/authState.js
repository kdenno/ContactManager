import React, { useReducer } from "react";
import AuthReducer from "./authReducer";
import AuthContext from "./authContext";
import axios from "axios";
import setAuthToken from "../../util/setAuthToken";

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
    token: localStorage.getItem("token"),
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("/api/auth");
      dispatch({ type: USER_LOADED, payload: res.data.data });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  const Login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/auth", formData, config);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  
        loadUser();
     
      
    } catch (err) {
     
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.error });
      
    }
  
  };

  const LogOut = () => {
    dispatch({ type: LOGOUT });
  };

  const Register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios.post("/api/users", formData, config).then((res) => {
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        loadUser();
      }).catch((err) => {
        dispatch({ type: REGISTER_FAIL, payload: err.response.data.error });
      });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        Login,
        LogOut,
        loadUser,
        Register,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
