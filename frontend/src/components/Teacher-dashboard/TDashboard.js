import Avatar from "antd/lib/avatar/avatar";
import React from "react";

import "./TD.css";

import { Link, Outlet } from "react-router-dom";

const TDashboard = () => {
  return (
    <div className="tdashboard">
      <div className="tdashboard_left">
        
        <div className="tdashboard_left_top">
          <Avatar src="./boy.jpg" style={{ width: "70px", height: "70px" }} />
          <h3 style={{ color: "white", fontWeight: "700", cursor: "pointer" }}>
            Faisal Khan<br></br>
          </h3>
        </div>
        <div className="tdashboard_left_middle">
          {/* <h3 style={{ marginTop: "10px" }}>Edit Profile</h3> */}
          <h3>
            <Link className="link-color" to="/teacher-dashboard"> Dashboard</Link>
          </h3>
          <h3>
            <Link className="link-color" to="/teacher-dashboard/time-table">Time Table </Link>{" "}
          </h3>
          {/* <h3>
            {" "}
            <Link className="link-color" to="/teacher-dashboard/account">Accounts</Link>
          </h3> */}
          <h3>
            <Link className="link-color" to="/teacher-dashboard/Students">Student</Link>
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
