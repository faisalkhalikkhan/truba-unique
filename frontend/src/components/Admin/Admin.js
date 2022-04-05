import React from "react";
import "./admin.css";
import Avatar from "antd/lib/avatar/avatar";
import {
  BankOutlined,
  BarChartOutlined,
  CarryOutOutlined,
  ContactsFilled,
  ContainerOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Overview from "./Overview/Overview";
import Student from "./Student/Student";

const Admin = () => {
  return (
    <div className="admin">
      <div className="admin_left">
        <div className="admin_profile">
          <Avatar className="admin_image" src="./boy.jpg" />
          <h2>Admin</h2>
        </div>
        <div className="admin_middle">
          <div className="admin_profile">
            <BarChartOutlined style={{ color: "#46244c", fontSize: "15px" }} />
            <h3 style={{ color: "#46244c", fontSize: "15px" }}>Overview</h3>
          </div>
          <div className="admin_profile">
            <ContactsFilled style={{ color: "#46244c", fontSize: "15px" }} />
            <h3 style={{ color: "#46244c", fontSize: "15px" }}>Staff</h3>
          </div>
          <div className="admin_profile">
            <TeamOutlined style={{ color: "#46244c", fontSize: "15px" }} />
            <h3 style={{ color: "#46244c", fontSize: "15px" }}>Students</h3>
          </div>
          <div className="admin_profile">
            <CarryOutOutlined style={{ color: "#46244c", fontSize: "15px" }} />
            <h3 style={{ color: "#46244c", fontSize: "15px" }}>Attendance</h3>
          </div>
          <div className="admin_profile">
            <BankOutlined style={{ color: "#46244c", fontSize: "15px" }} />
            <h3 style={{ color: "#46244c", fontSize: "15px" }}>Departments</h3>
          </div>
          <div className="admin_profile">
            <ContainerOutlined style={{ color: "#46244c", fontSize: "15px" }} />
            <h3 style={{ color: "#46244c", fontSize: "15px" }}>Library</h3>
          </div>
        </div>
        <div className="admin_end">
          <button className="logout_btn">Logout</button>
        </div>
      </div>
      <div className="admin_right">
        {/* <Overview /> */}
        <Student />
      </div>
    </div>
  );
};

export default Admin;
