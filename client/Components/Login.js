import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {TextField, FormControl, Button} from "@material-ui/core";
import axios from "axios";

import {clearForm, login, updateForm} from "../store/actions";

const Login = ({
  username,
  password,
  loggedIn,
  setUsername,
  setPassword,
  logInUser,
  dispatch,
}) => {
  useEffect(() => {
    dispatch(clearForm());
  }, []);
  return (
    <div>
      {loggedIn ? (
        <Redirect to="/" />
      ) : (
        <div className="form">
          <FormControl>
            <TextField
              value={username}
              label="Username"
              onChange={setUsername}
              inputProps={{style: {textAlign: "center"}}}
            />
          </FormControl>
          <br />
          <FormControl>
            <TextField
              value={password}
              label="Password"
              onChange={setPassword}
              inputProps={{style: {textAlign: "center"}}}
            />
          </FormControl>
          <br />
          <Button variant="outlined" onClick={(e) => logInUser(e, username, password)}>
            Login
          </Button>
        </div>
      )}
    </div>
  );
};

const mapState = ({form}) => {
  const {username, password, loggedIn} = form;
  return {
    username,
    password,
    loggedIn,
  };
};

const mapDispatch = (dispatch) => {
  const setUsername = (e) => {
    dispatch(updateForm("username", e.target.value));
  };
  const setPassword = (e) => {
    dispatch(updateForm("password", e.target.value));
  };
  const logInUser = (e, username, password) => {
    e.preventDefault();
    if (username.length && password.length) {
      console.log(username, password);
      dispatch(login({username, password}));
      dispatch(updateForm("loggedIn", true));
    } else alert("All Fields Must Be Completed");
  };
  return {
    setUsername,
    setPassword,
    logInUser,
    dispatch,
  };
};

export default connect(mapState, mapDispatch)(Login);
