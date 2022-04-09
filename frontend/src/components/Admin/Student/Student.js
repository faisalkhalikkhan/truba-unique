import React from "react";
import { Avatar } from "antd";
import "./s.css";
import AddStudent from "./AddStudent";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const navigate = useNavigate();
  return (
    <div className="student">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>Student Panel</h2>
        <button
          className="logout_btn"
          onClick={() => navigate("/admin/add-student")}
        >
          Add Student
        </button>
      </div>
      <div className="student_container">
        <div className="student_container_top">
          <div className="student_conatiner_studentList">
            <div className="student_conatiner_studentList_head">
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "600",
                  color: "#46244c",
                }}
              >
                Student List
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <h4 style={{ fontWeight: "600" }}>Photo</h4>
                <h4 style={{ fontWeight: "600" }}>Name</h4>
                <h4 style={{ fontWeight: "600" }}>Stream/Branch</h4>
                <h4 style={{ fontWeight: "600" }}>Enrollment Number</h4>
                <h4 style={{ fontWeight: "600" }}>action</h4>
              </div>
            </div>
            <div className="student_scroll">
              <div className="student_list_item">
                <Avatar src="/boy.jpg" size={45} />
                <h3>Faisal Khan</h3>
                <h4>Computer Science</h4>
                <h3>0114CS181034</h3>
                <button className="logout_btn">View</button>
              </div>
            </div>
          </div>
          <div className="student_application_box">
            <div className="student_conatiner_studentList_head">
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "600",
                  color: "#46244c",
                }}
              >
                Student Application
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginBottom: "15px",
                }}
              >
                <h4 style={{ fontWeight: "600" }}>Enrollment number</h4>
                <h4 style={{ fontWeight: "600" }}>Summary</h4>
                <h4 style={{ fontWeight: "600" }}>from</h4>
                <h4 style={{ fontWeight: "600" }}>To</h4>
                <h4 style={{ fontWeight: "600" }}>action</h4>
              </div>
            </div>
            <div className="student_scroll">
              <div className="student_list_item">
                <h3>0114CS181034</h3>
                <h4>I am suffering from fever</h4>
                <h3>31/03/2022</h3>
                <h3>31/03/2022</h3>
                <button className="logout_btn">Approved</button>
                <button className="logout_btn">Rejected</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "none" }} className="student_form">
        <AddStudent />
      </div>
    </div>
  );
};

export default Student;
