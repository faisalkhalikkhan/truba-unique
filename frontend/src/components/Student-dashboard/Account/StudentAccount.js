import { Divider } from "antd";
import React from "react";
import "./sa.css";

import { useSelector } from "react-redux";

const StudentAccount = () => {
  const account = useSelector((state) => state.student.account);
  return (
    <div className="student-account">
      <div className="student_account_top">
        <h2>Your Accounts</h2>
      </div>
      <div className="student_account_middle">
        <div className="student_account_middle_left">
          <div className="dashboard_middle_list_item color1">
            <h3>Tuition Fees</h3>
            <h3> &#x20b9; {`${account.collegeTuitionFees}`}.00</h3>
          </div>
          <div className="dashboard_middle_list_item color2">
            <h3>Bus Fees</h3>
            <h3> &#x20b9; {`${account.collegeBusFees}`}.00</h3>
          </div>
          <div className="dashboard_middle_list_item color3">
            <h3>Development Fees</h3>
            <h3> &#x20b9; {`${account.developmentFees}`}.00</h3>
          </div>
          <div className="dashboard_middle_list_item color4">
            <h3>Miscellaneous Fees</h3>
            <h3>&#x20b9; {`${account.miscellaneousFees}`}.00</h3>
          </div>
        </div>
        <div className="student_account_middle_right">
          <div className="student_account_middle_right_top">
            <div className="student_account_middle_right_top_item color4">
              <h3>Total Fees</h3>
              <h3>&#x20b9; {`${account.totalFees}`}.00</h3>
            </div>
            <div className="student_account_middle_right_top_item color2">
              <h3>Due Fees</h3>
              <h3>&#x20b9; {`${account.totalFees - account.paidAmount}`}.00</h3>
            </div>
          </div>
          <Divider />
          <button className="logout_btn">Pay Now</button>
        </div>
      </div>
      <div className="student_account_end">
        <div className="student_account_end_top">
          <h3>Receipts</h3>
        </div>
      </div>
    </div>
  );
};

export default StudentAccount;
