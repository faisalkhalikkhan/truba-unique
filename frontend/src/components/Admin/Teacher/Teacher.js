import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import "./s.css";
import AddTeacher from "./AddTeacher";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Teacher = () => {
  const navigate = useNavigate();
  const [teacherList, setTeacherList] = useState([])
  useEffect(() => {
    axios
    .get(`http://localhost:5000/teacher/get-teachers`)
    .then((response) => {
      setTeacherList(response.data)
      console.log(teacherList);
    });
  },[])
  return (
    <div className="Teacher">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>Teacher Panel</h2>
        <button
          className="logout_btn"
          onClick={() => navigate("/admin/add-teacher")}
        >
          Add Teacher
        </button>
      </div>
      <div className="Teacher_container">
        <div className="Teacher_container_top">
          <div className="Teacher_conatiner_TeacherList">
            <div className="Teacher_conatiner_TeacherList_head">
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "600",
                  color: "#46244c",
                }}
              >
                Teacher List
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
            <div className="Teacher_scroll">
              {teacherList.map((item, index) => {
                return (
                  <div className="Teacher_list_item">
                    <Avatar src={item.picture} size={45} />
                    <h3>{item.name}</h3>
                    <h4>Computer Science</h4>
                    <h3>0114CS181034</h3>
                    <button className="logout_btn">View</button>
                  </div>
                )
              })}

            </div>
          </div>
          <div className="Teacher_application_box">
            <div className="Teacher_conatiner_TeacherList_head">
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "600",
                  color: "#46244c",
                }}
              >
                Teacher Application
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
            <div className="Teacher_scroll">
              <div className="Teacher_list_item">
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

      <div style={{ display: "none" }} className="Teacher_form">
        <AddTeacher />
      </div>
    </div>
  );
};

export default Teacher;
