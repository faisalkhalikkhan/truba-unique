import React, { useEffect, useState } from "react";
import {
  Steps,
  Button,
  message,
  Upload,
  Input,
  DatePicker,
  Select,
  Empty,
  Divider,
} from "antd";
import "./as.css";
import { DeleteFilled, InboxOutlined } from "@ant-design/icons";
import axios from "axios";

const { RangePicker } = DatePicker;
const { Option } = Select;

let listOfHistory = [];
let historyID = 0;
let StudentPictureId = 0;

let student_name = "";
let student_username = "";
let student_password = "";
let student_number = "";
let student_numberAlter = "";
let student_address = "";
let student_eamil = "";
let EducationList;
let department = "";
let batch = "";
let sem = ""

let CollegeTuitionFees = 0;
let DevelopmentFees = 0;
let CollegeBusFees = 0;
let MiscellaneousFees = 0;
let paidAmount = 0;
let libraryFine = 0;
let otherFine = 0;
let conditionOfAdmission = 0;

let CreateUserID;

const changeHandler = async () => {
  const fileInput = document.querySelector("#fileInput");
  console.log(fileInput.files[0]);
  axios
    .put(
      "https://personal-eewexkfl.outsystemscloud.com/TrubaErp/rest/Image_To_ID/Image_To_ID",
      fileInput.files[0]
    )
    .then((response) => {
      message.success("Picture Uploaded");
      console.log(response.data);
      StudentPictureId = "https://personal-eewexkfl.outsystemscloud.com/TrubaErp/rest/Image_To_ID/ID_To_Image?ID="+response.data["ImageID"];
      console.log(StudentPictureId);
    });
};

const submitData = () => {
  function CreateUser() {
    // Add User
    const addUserbody = {
      name: student_name,
      username: student_username,
      password: student_password,
      picture: StudentPictureId,
      role: "student",
    };
    axios
      .post("http://localhost:5000/admin-power/add-user", addUserbody)
      .then((response) => {
        message.success("addUserbody Processing complete!");
        CreateUserID = response.data._id;
        console.log(response.data._id);
        console.log("=====================================");
        UserDetails();
      });
  }
  CreateUser();
  function UserDetails() {
    // update Student by CreateUserID

    const addStudentbody = {
      name : student_name,
      picture: StudentPictureId,
      email: student_eamil,
      address: student_address,
      phone: student_number,
      alternativePhone: student_numberAlter,
      education: EducationList,
      batch: batch,
      semester: sem,
      department: department
    };
    axios
      .post(
        `http://localhost:5000/student/update-student/${CreateUserID}`,
        addStudentbody
      )
      .then((response) => {
        message.success("Student Details Submited!");
        console.log(response.data);
        console.log("=====================================");
        UpdateAccount();
      });
  }
  function UpdateAccount() {
    //update Account Details
    const addStudentAccountbody = {
      collegeTuitionFees: CollegeTuitionFees,
      collegeBusFees: DevelopmentFees,
      developmentFees: CollegeBusFees,
      miscellaneousFees: MiscellaneousFees,
      totalFees:
        CollegeTuitionFees +
        DevelopmentFees +
        CollegeBusFees +
        MiscellaneousFees,
      paidAmount: paidAmount,
      conditionOfAdmission: conditionOfAdmission,
    };
    axios
      .post(
        `http://localhost:5000/accounts/update/${CreateUserID}`,
        addStudentAccountbody
      )
      .then((response) => {
        message.success("Student Account Details Submited!");
        console.log(response.data);
        console.log("=====================================");
      });
    SendWelcomeMail();
  }

  function SendWelcomeMail() {
    // send welcome mail
    const mailBody = {
      To: student_eamil,
      Subject: "Account Details",
      TopHeading: `Welcome to Truba Group ${student_name} !
      Your Account is just Created Congrats!`,
      Content: `Hi
${student_name},
Its a pleasure having you with us on board.we are so glad that you are here, and it is going to be a great academic year! Every day we work hand in hand with parents, teachers, educators and community members to improve Truba's education system for students of all backgrounds and abilities. Our new site reflects this cooperative relationship and the role that so many Trubians play in ensuring student success.         


Your User-Id = ${student_username}
Your Password = ${student_password}


`,
      Regards: "Truba Group Of Institution",
      ContactUs: "https://www.trubainstitute.ac.in/",
    };
    axios
      .post(
        `https://personal-eewexkfl.outsystemscloud.com/TrubaErp/rest/SendWelcomeMsg/Email`,
        mailBody
      )
      .then((response) => {
        message.success("Student Mail Send!");
        alert(`Account Details is send to ${student_eamil}`);
        console.log(response.data);
        console.log("=====================================");
      });
  }
};

const StudentGeneralInfo = () => {
  return (
    <>
      <div className="add_student_top_general_info">
        <input
          type="file"
          name="file"
          id="fileInput"
          accept="image/*"
          onChange={changeHandler}
        />
      </div>
      <div
        className="add_student_middle_general_info"
        style={{ paddingLeft: "15px", paddingRight: "15px" }}
      >
        <div className="add_student_middle_general_info_input">
          <h3>Student Name</h3>
          <Input
            id="student_name"
            onChange={(e) => (student_name = e.target.value)}
          />
        </div>
        <div className="add_student_middle_general_info_input">
          <h3>Student Email</h3>
          <Input
            id="student_email"
            onChange={(e) => (student_eamil = e.target.value)}
          />
        </div>
        <div className="add_student_middle_general_info_input">
          <h3>Student Phone Number</h3>
          <Input
            id="student_number"
            onChange={(e) => (student_number = e.target.value)}
          />
        </div>
        <div className="add_student_middle_general_info_input">
          <h3>Student Alternet Phone Number</h3>
          <Input
            id="student_number"
            onChange={(e) => (student_numberAlter = e.target.value)}
          />
        </div>
        <div className="add_student_middle_general_info_input">
          <h3>Student Address</h3>
          <Input.TextArea
            id="student_address"
            onChange={(e) => (student_address = e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

const EducationHistory = () => {
  const [schoolName, setSchoolName] = useState("");
  const [courseType, setCourse] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [startAt, setStart] = useState("");
  const [endAt, setEnd] = useState("");

  useEffect(() => {}, [listOfHistory]);

  const printData = () => {
    listOfHistory = [
      ...listOfHistory,
      {
        id: historyID,
        school: schoolName,
        course: courseType,
        percentage: percentage,
        startAt: startAt,
        endAt,
      },
    ];
    historyID++;
    setSchoolName("");
    setCourse("");
    setPercentage(0);
    setStart("");
    setEnd("");
    EducationList = listOfHistory;
    console.log(EducationList);
  };

  function onChange(value) {
    console.log(`selected ${value}`);
    setCourse(value);
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  const removeItem = (id) => {};
  return (
    <div className="education-history">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{ flex: "0.4" }}
          className="add_student_middle_general_info_input"
        >
          <h3>School/College Name</h3>
          <Input
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </div>
        <div
          style={{ flex: "0.4" }}
          className="add_student_middle_general_info_input"
        >
          <h3>Course Type</h3>
          <Select
            showSearch
            placeholder="Select a course"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="10th">10th</Option>
            <Option value="12th">12th</Option>
            <Option value="Diploma">Diploma</Option>
            <Option value="Graduation">Graduation</Option>
          </Select>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{ flex: "0.4" }}
          className="add_student_middle_general_info_input"
        >
          <h3>Percentage</h3>
          <Input
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
          />
        </div>
        <div
          style={{ flex: "0.4" }}
          className="add_student_middle_general_info_input"
        >
          <h3>Duration</h3>
          <RangePicker
            format="YYYY-MM-DD"
            onChange={(value) => {
              setStart(value[0]._d);
              setEnd(value[1]._d);
            }}
          />
        </div>
      </div>
      <button className="logout_btn" onClick={printData}>
        ADD
      </button>
      <div className="education-student-list">
        {listOfHistory.length > 0 ? (
          listOfHistory.map((item) => (
            <div className="education-card">
              <h3>{item.course}</h3>
              <h4>{item.school}</h4>
              <h4>{item.percentage} &#x25;</h4>
              <h4>{item.id} &#x25;</h4>
              <Button
                className="logout_btn"
                type="primary"
                shape="circle"
                icon={<DeleteFilled />}
                size="middle"
                onClick={removeItem(item.id)}
              />
            </div>
          ))
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </div>
    </div>
  );
};

const FinalPage = () => {
  return (
    <div className="final-page">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{ flex: "0.4" }}
          className="add_student_middle_general_info_input"
        >
          <h3>College Tuition Fees</h3>
          <Input
            type={"number"}
            onChange={(e) => (CollegeTuitionFees = e.target.value)}
          />
        </div>
        <div
          style={{ flex: "0.4" }}
          className="add_student_middle_general_info_input"
        >
          <h3>College Bus Fees</h3>
          <Input
            type={"number"}
            onChange={(e) => (CollegeBusFees = e.target.value)}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{ flex: "0.4" }}
          className="add_student_middle_general_info_input"
        >
          <h3>Development Fees</h3>
          <Input
            type={"number"}
            onChange={(e) => (DevelopmentFees = e.target.value)}
          />
        </div>
        <div
          style={{ flex: "0.4" }}
          className="add_student_middle_general_info_input"
        >
          <h3>Miscellaneous Fees</h3>
          <Input
            type={"number"}
            onChange={(e) => (MiscellaneousFees = e.target.value)}
          />
        </div>
        <div
          style={{ flex: "0.4" }}
          className="add_student_middle_general_info_input"
        >
          <h3>Paid Amount</h3>
          <Input
            type={"number"}
            onChange={(e) => (paidAmount = e.target.value)}
          />
        </div>
        <div
          style={{ flex: "0.4" }}
          className="add_student_middle_general_info_input"
        >
          <h3>Condition Of Admission</h3>
          <Input
            type={"text"}
            onChange={(e) => (conditionOfAdmission = e.target.value)}
          />
        </div>
      </div>
      <Divider />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: "0.4" }}>
          <div className="add_student_middle_general_info_input">
            <h3>Student ID</h3>
            <Input onChange={(e) => (student_username = e.target.value)} />
          </div>

          <div className="add_student_middle_general_info_input">
            <h3>Student Password</h3>
            <Input onChange={(e) => (student_password = e.target.value)} />
          </div>
        </div>
        <div style={{ flex: "0.4" }}>
          <div className="add_student_middle_general_info_input">
            <h3>Student Batch</h3>
            <Input onChange={(e) => (batch = e.target.value)} />
          </div>

          <div className="add_student_middle_general_info_input">
            <h3>Student Semester</h3>
            <Input onChange={(e) => (sem = e.target.value)} />
          </div>
          <div className="add_student_middle_general_info_input">
            <h3>Student Department</h3>
            <Input onChange={(e) => (department = e.target.value)} />
          </div>
        </div>
      </div>
    </div>
  );
};

const { Step } = Steps;
const AddStudent = () => {
  const steps = [
    {
      title: "General Info",
      content: <StudentGeneralInfo />,
    },
    {
      title: "Education History",
      content: <EducationHistory />,
    },
    {
      title: "Final Page",
      content: <FinalPage />,
    },
  ];

  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="admin-add-student">
      <div>
        <h1>Add Student</h1>
      </div>
      <Divider />
      <Steps responsive={true} current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={submitData}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default AddStudent;
