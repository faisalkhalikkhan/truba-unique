import { DatePicker, Input, Radio, Space } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import "./afl.css";
import { Select } from "antd";

const ApplyForLeave = () => {
  const [radio, setRvalue] = useState("");

  const { Option } = Select;
  const { RangePicker } = DatePicker;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <div className="apply_for_leaves">
      <h2>Leave Application</h2>
      <div className="apply_for_leave_mid">
        <div className="apply_for_leaves_form">
          <form>
            <div>
              <h3>Name Of the applicant</h3>
              <Input />
            </div>
            <div>
              <h3>Department</h3>
              <Select
                showSearch
                style={{ width: "100%" }}
                placeholder="Select your department"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="Computer Science">Computer Science</Option>
                <Option value="Civil">Civil</Option>
                <Option value="Mechanical">Mechanical</Option>
              </Select>
            </div>
            <div>
              <h3>Enrollment Number</h3>
              <Input />
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
                <RangePicker />
                <br />
                <button
                  type="submit"
                  style={{ marginTop: "15px" }}
                  className="logout_btn"
                >
                  Apply
                </button>
              </div>
            </div>
          </form>
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
