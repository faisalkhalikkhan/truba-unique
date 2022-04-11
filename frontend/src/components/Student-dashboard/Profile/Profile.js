import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { DatePicker, Input, Radio } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import "./p.css";

const Profile = () => {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="profile">
      <h3 style={{ width: "100%", textAlign: "right" }}>
        Scholar Number: 11939
      </h3>
      <div className="profile_top">
        {/* <Avatar src="/boy.jpg" style={{ width: "150px", height: "150px" }} /> */}
        <Avatar icon={<UserOutlined />} size={150} />
        <div className="profile_top_right">
          <div className="profile_top_text_box">
            <h4>Name</h4>
            <input value="Amit Dhoke" />
            <EditOutlined style={{ fontSize: "20px", color: "#864879" }} />
          </div>
          <div className="profile_top_text_box">
            <h4>Email</h4>
            <input value="faisal.khalik.khan@gmail.com" />
            <EditOutlined style={{ fontSize: "20px", color: "#864879" }} />
          </div>
        </div>
      </div>
      <div className="profile_divider"> </div>
      <div className="profile_general_info">
        <div className="profile_general_info_left">
          <div className="profile_top_text_box">
            <h4>Phone Numbwr</h4>
            <input type="number" value="7400514604" />
            <EditOutlined style={{ fontSize: "20px", color: "#864879" }} />
          </div>
          <div className="profile_top_text_box">
            <h4>Alternate Phone Number</h4>
            <input type="number" value="7400514604" />
            <EditOutlined style={{ fontSize: "20px", color: "#864879" }} />
          </div>
          <div className="profile_top_text_box">
            <h4>Address</h4>
            <Input.TextArea value="21/1 rajpura burhanpur madhya pradesh 450331" />
          </div>
        </div>
        <div className="profile_general_info_right">
          <div className="profile_top_text_box">
            <h4>Sex</h4>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="transgender">Trans-Gender</Radio>
            </Radio.Group>
          </div>
          <div className="profile_top_text_box">
            <h4>Date Of Birth</h4>
            <DatePicker />
          </div>
          <div className="profile_top_text_box">
            <h4>Address</h4>
            <Input.TextArea value="21/1 rajpura burhanpur madhya pradesh 450331" />
          </div>
        </div>
      </div>
      <div className="profile_divider"> </div>
      <div className="profile_general_info">
        <div className="profile_general_info_left">
          <div className="profile_top_text_box">
            <h4>10th percentage/CGPA</h4>
            <input type="number" value="85" />
            <EditOutlined style={{ fontSize: "20px", color: "#864879" }} />
          </div>
          <div className="profile_top_text_box">
            <h4>10th Passing Year</h4>
            <DatePicker onChange={onChange} picker="year" />
          </div>
          <div className="profile_top_text_box">
            <h4>School Name</h4>
            <Input.TextArea value="Patel Ratilal Boriwala English Higher Secondary School burhanpur" />
          </div>
        </div>
        <div className="profile_general_info_left">
          <div className="profile_top_text_box">
            <h4>12th percentage/CGPA</h4>
            <input type="number" value="95" />
            <EditOutlined style={{ fontSize: "20px", color: "#864879" }} />
          </div>
          <div className="profile_top_text_box">
            <h4>12th Passing Year</h4>
            <DatePicker onChange={onChange} picker="year" />
          </div>
          <div className="profile_top_text_box">
            <h4>School Name</h4>
            <Input.TextArea value="Patel Ratilal Boriwala English Higher Secondary School burhanpur" />
          </div>
        </div>
      </div>
      <div className="profile_divider"> </div>
      <div className="profile_general_info">
        <div className="profile_general_info_left">
          <div className="profile_top_text_box">
            <h4>10th percentage/CGPA</h4>
            <input type="number" value="85" />
            <EditOutlined style={{ fontSize: "20px", color: "#864879" }} />
          </div>
          <div className="profile_top_text_box">
            <h4>10th Passing Year</h4>
            <DatePicker onChange={onChange} picker="year" />
          </div>
          <div className="profile_top_text_box">
            <h4>School Name</h4>
            <Input.TextArea value="Patel Ratilal Boriwala English Higher Secondary School burhanpur" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
