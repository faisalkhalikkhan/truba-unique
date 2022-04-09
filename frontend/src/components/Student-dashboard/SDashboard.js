import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import "./sd.css";

import { Link, Outlet } from "react-router-dom";

const SDashboard = () => {
  return (
    <div className="sdashboard">
      <div className="sdashboard_left">
        <div className="sdashboard_left_top">
          <Avatar src="/boy.jpg" style={{ width: "70px", height: "70px" }} />
          <h3 style={{ color: "white", fontWeight: "700", cursor: "pointer" }}>
            Faisal Khan
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
