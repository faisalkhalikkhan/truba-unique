import React, { useEffect } from "react";
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
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Admin = () => {
  const nevigateMe = useNavigate();
  const user = useSelector((state) => state.user);
  console.log("user idher h", user);
  return (
    <div className="admin">
      <div className="admin_left">
        <div className="admin_profile">
          <Avatar className="admin_image" src={`https://personal-eewexkfl.outsystemscloud.com/TrubaErp/rest/Image_To_ID/ID_To_Image?ID=${user.pitcure}`}/>
          <h2>{user.username}</h2>
        </div>
        <div className="admin_middle">
          <div onClick={() => nevigateMe("/admin")} className="admin_profile">
            <BarChartOutlined style={{ color: "#46244c", fontSize: "15px" }} />
            <h3 style={{ color: "#46244c", fontSize: "15px" }}>Overview</h3>
          </div>
          <div
            onClick={() => nevigateMe("/admin/staff")}
            className="admin_profile"
          >
            <ContactsFilled style={{ color: "#46244c", fontSize: "15px" }} />
            <h3 style={{ color: "#46244c", fontSize: "15px" }}>Staff</h3>
          </div>
          <div
            onClick={() => nevigateMe("/admin/student")}
            className="admin_profile"
          >
            <TeamOutlined style={{ color: "#46244c", fontSize: "15px" }} />
            <h3 style={{ color: "#46244c", fontSize: "15px" }}>Students</h3>
          </div>
          <div
            onClick={() => nevigateMe("/admin/attendance")}
            className="admin_profile"
          >
            <CarryOutOutlined style={{ color: "#46244c", fontSize: "15px" }} />
            <h3 style={{ color: "#46244c", fontSize: "15px" }}>Attendance</h3>
          </div>
          <div
            onClick={() => nevigateMe("/admin/department")}
            className="admin_profile"
          >
            <BankOutlined style={{ color: "#46244c", fontSize: "15px" }} />
            <h3 style={{ color: "#46244c", fontSize: "15px" }}>Departments</h3>
          </div>
          <div
            onClick={() => nevigateMe("/admin/library")}
            className="admin_profile"
          >
            <ContainerOutlined style={{ color: "#46244c", fontSize: "15px" }} />
            <h3 style={{ color: "#46244c", fontSize: "15px" }}>Library</h3>
          </div>
        </div>
        <div className="admin_end">
          <button className="logout_btn">Logout</button>
        </div>
      </div>
      <div className="admin_right">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
