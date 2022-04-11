import { DatePicker, Input, Radio, Space } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState, useEffect } from "react";
import { Avatar } from "antd";
// import shraddha from "../../../img/shraddha"
import axios from "axios";
import { message } from "antd";
import { Select } from "antd";

const TStudents = () => {
  const [Students, setStudents] = useState([]);
  const fetchStudents = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/student/get-students"
    )
    const Students = data;
    setStudents(Students);
    console.log(Students);
  };
  

  useEffect(() => {
    fetchStudents();
  }, []);



  return (
    <div className="Student-Top-div">

      <div className="Teacher_container">
        <div className="Teacher_conatiner_TeacherList" style={{"height":"550px"}}>
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
              Student List
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "30px",
                paddingRight: "50px",
              }}
            >
              <h4 style={{ fontWeight: "600" }}>Photo</h4>
              <h4 style={{ fontWeight: "600" }}>Name</h4>
              <h4 style={{ fontWeight: "600" }}>Mobile Number</h4>
              <h4 style={{ fontWeight: "600" }}>Email</h4>
              <h4 style={{ fontWeight: "600" }}>action</h4>
            </div>
          </div>
          <div className="Teacher_scroll" style={{ "paddingBottom": "50px" }}>
            {Students.map((item, index) => {
              return (
                <div className="Teacher_list_item">
                  <Avatar src={item.picture} size={45} />
                  <h3>{item.name}</h3>
                  <h4>{item.phone}</h4>
                  <h3>{item.email}</h3>
                  <button className="logout_btn">View</button>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </div>
  );
};
export default TStudents;
