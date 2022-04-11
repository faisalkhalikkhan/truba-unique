import Avatar from "antd/lib/avatar/avatar";
import React, { useEffect, useState } from "react";

import "./TD.css";

import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getTeacher } from "../../redux/actions/teacher.action";

const TDashboard = () => {
  const [teacher, setTeacher] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/teacher/get-teacher/${user._id}`)
      .then((res) => {
        setTeacher(res.data[0]);
      })
      .catch((e) => console.log(e));
  }, []);
  dispatch(getTeacher(teacher));
  return (
    <div className="tdashboard">
      <div className="tdashboard_left">
        <div className="tdashboard_left_top">
          <Avatar src={`${user.picture}`} style={{ width: "70px", height: "70px" }} />
          <h3 style={{ color: "white", fontWeight: "700", cursor: "pointer" }}>
            {user.username}
            <br></br>
          </h3>
        </div>
        <div className="tdashboard_left_middle">
          <h3>
            <Link className="link-color" to="/teacher-dashboard">
              {" "}
              Dashboard
            </Link>
          </h3>
          <h3>
            <Link className="link-color" to="/teacher-dashboard/time-table">
              Time Table{" "}
            </Link>{" "}
          </h3>

          {/* <h3>
            {" "}
            <Link className="link-color" to="/teacher-dashboard/account">Accounts</Link>
          </h3> */}
          <h3>
            <Link className="link-color" to="/teacher-dashboard/Students">
              Student
            </Link>
          </h3>
          <h3>
            <Link className="link-color" to="/teacher-dashboard/trugram">
              Trugram
            </Link>
          </h3>
        </div>
        <div className="tdashboard_left_end">
          <button>LOGOUT</button>
        </div>
      </div>
      <div className="tdashboard_right">
        <Outlet />
      </div>
    </div>
  );
};

export default TDashboard;
