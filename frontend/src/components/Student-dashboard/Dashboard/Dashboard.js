import { SearchOutlined } from "@ant-design/icons/lib/icons";
import React from "react";
import "./d.css";
import { Progress } from "antd";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard_top">
        <h2>Welcome Back, Faisal Khan</h2>
        <form>
          <SearchOutlined style={{ fontSize: "large", fontWeight: "700" }} />
          <input id="search_input" placeholder="Search For Anything..." />
          <button type="submit" style={{ display: "none" }}></button>
        </form>
      </div>
      <div className="dashboard_middle">
        <div className="dashboard_middle_left">
          <div className="dashboard_middle_list_item color1">
            <h3>Student profile</h3>
            <h3>View</h3>
          </div>
          <div className="dashboard_middle_list_item color2">
            <h3>Academic Calander</h3>
            <h3>View</h3>
          </div>
          <div className="dashboard_middle_list_item color3">
            <h3>Online Payment</h3>
            <h3>View</h3>
          </div>
          <div className="dashboard_middle_list_item color4">
            <h3>Class Work</h3>
            <h3>View</h3>
          </div>
        </div>
        <div className="dashboard_middle_right">
          <Progress
            strokeColor="#595260"
            strokeWidth={8}
            type="circle"
            percent={75}
          />
          <h1>Attendance</h1>
          <button className="view_attendance_btn">View Details</button>
        </div>
      </div>
      <div className="dashboard_end"></div>
    </div>
  );
};

export default Dashboard;
