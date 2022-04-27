import React, { useState } from "react";
import firebase from "firebase/compat";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

import { Google, Github, Facebook, PiggyBank } from "../assets";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import { Email } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1EE2B5",
    },
    secondary: {
      main: "#252525",
    },
  },
});

const SignInPage = () => {
  return (
    <div className="h-full bg-white flex flex-col md:flex-row">
      <div className="w-80 absolute md:flex md:w-screen md:h-full md:justify-end">
        <img
          src={PiggyBank}
          alt=""
          className=" md:bg-java-500 md:object-contain md:w-1/2 md:flex md:justify-start "
        />
      </div>
      <div className="flex w-screen h-screen relative md:w1/2">
        <div className="mx-5 pt-10">
          <h3 className="text-4xl font-medium">Sign In</h3>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-2/3 md:w-1/2">
          <div className="flex flex-col">
            <form
              action=""
              className="flex flex-col justify-center px-3 mb-2 gap-2"
            >
              <ThemeProvider theme={theme}>
                <FormControl
                  sx={{ m: 1, width: "inherit" }}
                  variant="outlined"
                  required
                >
                  <InputLabel color="secondary">Email</InputLabel>
                  <OutlinedInput
                    type="email"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <Email />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </ThemeProvider>
              <div className="px-2">
                <button className="py-4 bg-java-500 w-full rounded-lg text-white">
                  Continue
                </button>
              </div>
            </form>
            <div className="text-center">
              <p>or</p>
            </div>
            <div className="flex flex-col gap-5 justify-between my-5 mx-5">
              <button
                onClick={() =>
                  auth.signInWithRedirect(
                    new firebase.auth.GoogleAuthProvider()
                  )
                }
                className="flex items-center px-5 shadow-md rounded-lg w-full h-14 bg-apple-green-500"
              >
                <img
                  src={Google}
                  alt=""
                  className="w-8 h-8 flex justify-start mr-5"
                />
                Continue with Google
              </button>
              <button
                onClick={() =>
                  auth.signInWithRedirect(
                    new firebase.auth.GithubAuthProvider()
                  )
                }
                className="flex items-center px-5 shadow-md rounded-lg w-full h-14 bg-apple-green-500"
              >
                <img
                  src={Github}
                  alt=""
                  className="w-8 h-8 flex justify-start mr-5"
                />
                Continue with Github
              </button>
              <button
                onClick={() =>
                  auth.signInWithRedirect(
                    new firebase.auth.FacebookAuthProvider()
                  )
                }
                className="flex items-center  px-5 shadow-md rounded-lg w-full h-14 bg-apple-green-500"
              >
                <img src={Facebook} alt="" className="w-8 h-8 mr-5 " />
                <p className="text-center">Continue with Facebook</p>
              </button>
            </div>
          </div>
          <div className="px-5 bg-white pt-3 pb-5 flex flex-col gap-3 md:bg-transparent">
            <Link to={"/signup"}>
              Don't have an account?{" "}
              <span className="text-java-500">Sign up</span>
            </Link>
            <Link to={"/"} className="text-java-500">
              Forgotten your password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
