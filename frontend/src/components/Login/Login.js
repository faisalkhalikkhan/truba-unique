import React, { useState } from "react";
import "./login.css";
import animation from "./sl.json";
import Lottie from "lottie-react";

import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions/user.action";

const Login = () => {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/admin-power/auth/v1/user", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.length > 0) {
          console.log(response.data[0]);
          dispatch(setUser(response.data[0]));
          if (response.data[0]["role"] == "student") {
            message.success("Login Successfull");
            nevigate("/student-dashboard");
          } else if (response.data[0]["role"] == "teacher") {
            message.success("Login Successfull");
            nevigate("/teacher-dashboard");
          } else {
            message.success("Login Successfull");
            nevigate("/admin");
          }
        } else message.error("user -->not found");
      })
      .catch((e) => {
        message.error("user not found");
      });
  };

  return (
    <div className="login">
      <div className="login_div">
        <div className="animation">
          <Lottie
            autoplay={true}
            loop={true}
            animationData={animation}
            style={{ width: "400px" }}
          />
        </div>

        <div className="vertical_bar"></div>
        <div className="login_input_box">
          <div>
            <img
              src="truba-logo.jpeg"
              style={{ width: "80px", height: "80px", broderRadius: "50%" }}
              className="login_icon"
            />
          </div>
          <h1 className="login_title">login to truba erp</h1>
          <form onSubmit={auth}>
            <div className="input_div">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="input_div">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="login_page_btn" type="submit">
              Login
            </button>
          </form>
          <p id="forget_link">Make a query here if-forgot Password</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
