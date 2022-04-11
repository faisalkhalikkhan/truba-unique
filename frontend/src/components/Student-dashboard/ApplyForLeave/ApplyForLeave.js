import { DatePicker, Input, Radio, Space, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import "./afl.css";
import { Select } from "antd";

import { useSelector } from "react-redux";
import axios from "axios";
const ApplyForLeave = () => {
  const [radio, setRvalue] = useState("");
  const [startAt, setStart] = useState("");
  const [endAt, setEnd] = useState("");

  const user = useSelector((state) => state.student.generalInfo);

  const { Option } = Select;
  const { RangePicker } = DatePicker;

  const onSubmit = () => {
    const data = {
      name: user.name,
      department: user.department,
      enrollment: `Truba${user.studentId}`,
      reasone: radio,
      from: startAt,
      to: endAt,
    };
    axios
      .post("http://localhost:5000/leave/apply", data)
      .then((res) => message.success("Done!"))
      .catch((e) => message.error("failed, Try again"));
  };

  return (
    <div className="apply_for_leaves">
      <h2>Leave Application</h2>
      <div className="apply_for_leave_mid">
        <div className="apply_for_leaves_form">
          <div>
            <h3>Name Of the applicant</h3>
            <Input value={user.name} />
          </div>
          <div>
            <h3>Department</h3>
            <Input value={user.department} />
          </div>
          <div>
            <h3>Enrollment Number</h3>
            <Input value={`Truba${user.studentId}`} />
          </div>
          <div className="apply_for_leave_flex">
            <div>
              <h3>Reasone For Request</h3>
              <Radio.Group
                onChange={(e) => setRvalue(e.target.value)}
                value={radio}
              >
                <Space direction="vertical">
                  <Radio value="sick leave">Sick Leave</Radio>
                  <Radio value="emergency leave">Emergency Leave</Radio>
                  <Radio value={4}>
                    Other...
                    {radio === 4 ? (
                      <TextArea style={{ width: 300, marginLeft: 10 }} />
                    ) : null}
                  </Radio>
                </Space>
              </Radio.Group>
            </div>
            <div>
              <h3>Pick a Date From-To</h3>
              <RangePicker
                format="YYYY-MM-DD"
                onChange={(value) => {
                  setStart(value[0]._d);
                  setEnd(value[1]._d);
                }}
              />
              <br />
              <button
                type="submit"
                style={{ marginTop: "15px" }}
                className="logout_btn"
                onClick={onSubmit}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="apply_for_leaves_status">
          <h3 style={{ fontWeight: "600" }}>Application Status</h3>
          <div className="apply_for_leaves_status_item">
            <h3 style={{ color: "#F76E11" }}>Pending....</h3>
            <h3 style={{ color: "#06FF00" }}>Approved</h3>
            <h3 style={{ color: "#FF1818" }}>Rejected</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApplyForLeave;
