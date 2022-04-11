import Avatar from "antd/lib/avatar/avatar";
import React, { useEffect, useState } from "react";
import "./sd.css";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { studentAction } from "../../redux/actions/student.action";

const SDashboard = () => {
  const [account, setAccount] = useState("");
  const [details, setDetails] = useState("");
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/accounts/details/${user._id}`)
      .then((res) => {
        setAccount(res.data);
        console.log(res.data, "<----");
      })
      .catch((e) => console.log(e));
    axios
      .get(`http://localhost:5000/student/get-student/${user._id}`)
      .then((res) => {
        setDetails(res.data[0]);
      })
      .catch((e) => console.log(e));
    console.log("--->", account, details);
  }, []);

  dispatch(
    studentAction({
      account: account,
      generalInfo: details,
    })
  );
  return (
    <div className="sdashboard">
      <div className="sdashboard_left">
        <div className="sdashboard_left_top">
          <Avatar src={`${user.pitcure}`} size={60} />
          <h3 style={{ color: "white", fontWeight: "700", cursor: "pointer" }}>
            {user.username}
          </h3>
        </div>
        <div className="sdashboard_left_middle">
          <h3 style={{ marginTop: "10px" }}>
            <Link className="link-color" to="/student-dashboard/profile">
              Edit Profile
            </Link>
          </h3>
          <h3>
            <Link className="link-color" to="/student-dashboard">
              {" "}
              Dashboard
            </Link>
          </h3>
          <h3>
            <Link className="link-color" to="/student-dashboard/time-table">
              Time Table{" "}
            </Link>{" "}
          </h3>
          <h3>
            {" "}
            <Link className="link-color" to="/student-dashboard/account">
              Accounts
            </Link>
          </h3>
          <h3>
            <Link
              className="link-color"
              to="/student-dashboard/apply-for-leave"
            >
              Apply For Leave
            </Link>
          </h3>
          <h3>
            <Link className="link-color" to="/student-dashboard/trugram">
              Trugram
            </Link>
          </h3>
        </div>
        <div className="sdashboard_left_end">
          <button>LOGOUT</button>
        </div>
      </div>
      <div className="sdashboard_right">
        <Outlet />
      </div>
    </div>
  );
};

export default SDashboard;
