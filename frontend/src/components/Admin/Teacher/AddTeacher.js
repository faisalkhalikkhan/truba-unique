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
let TeacherPictureId="";

let Teacher_name = "";
let Teacher_username = "";
let Teacher_password = "";
let Teacher_number = "";
let Teacher_numberAlter = "";
let Teacher_address = "";
let Teacher_eamil = "";
let SubjectsList;
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
      TeacherPictureId = "https://personal-eewexkfl.outsystemscloud.com/TrubaErp/rest/Image_To_ID/ID_To_Image?ID="+response.data["ImageID"];
      console.log(TeacherPictureId);
    });
};

const submitData = () => {
  function CreateUser() {
    // Add User
    const addUserbody = {
      name: Teacher_name,
      username: Teacher_username,
      password: Teacher_password,
      picture: TeacherPictureId,
      role: "teacher",
    };
    console.log("ye ja rha h api pr" + addUserbody)
    axios
      .post("http://localhost:5000/admin-power/add-user", addUserbody)
      .then((response) => {
        message.success("addUserbody Processing complete!");
        CreateUserID = response.data._id;
        console.log(response.data._id);
        console.log("User Crated");
        UserDetails();
      });
  }
  CreateUser();
  function UserDetails() {
    // update Teacher by CreateUserID

    const addTeacherbody = {
      name : Teacher_name,
      picture: TeacherPictureId,
      email: Teacher_eamil,
      address: Teacher_address,
      phone: Teacher_number,
      alternativePhone: Teacher_numberAlter,
      subjects: SubjectsList,
    };
    console.log("ye ja rha h api pr" + addTeacherbody)
    axios
      .post(
        `http://localhost:5000/teacher/update-teacher/${CreateUserID}`,
        addTeacherbody
      )
      .then((response) => {
        message.success("Teacher Details Submited!");
        console.log(response.data);
        console.log("=====================================");
        // UpdateAccount();
        SendWelcomeMail()
      });
  }
  // function UpdateAccount() {
  //   //update Account Details
  //   const addTeacherAccountbody = {
  //     collegeTuitionFees: CollegeTuitionFees,
  //     collegeBusFees: DevelopmentFees,
  //     developmentFees: CollegeBusFees,
  //     miscellaneousFees: MiscellaneousFees,
  //     totalFees:
  //       CollegeTuitionFees +
  //       DevelopmentFees +
  //       CollegeBusFees +
  //       MiscellaneousFees,
  //     paidAmount: paidAmount,
  //     conditionOfAdmission: conditionOfAdmission,
  //   };
  //   axios
  //     .post(
  //       `http://localhost:5000/accounts/update/${CreateUserID}`,
  //       addTeacherAccountbody
  //     )
  //     .then((response) => {
  //       message.success("Teacher Account Details Submited!");
  //       console.log(response.data);
  //       console.log("=====================================");
  //     });
  //   SendWelcomeMail();
  // }

  function SendWelcomeMail() {
    
    // send welcome mail
    const mailBody = {
      To: Teacher_eamil,
      Subject: "Account Details",
      TopHeading: `Welcome to Truba Group ${Teacher_name} !
  Your Account is just Created Congrats!`,
      Content: `Hi
${Teacher_name},
Its a pleasure having you with us on board.we are so glad that you are here, and it is going to be a great academic year! Every day we work hand in hand with parents, teachers, educators and community members to improve Truba's education system for Teachers of all backgrounds and abilities. Our new site reflects this cooperative relationship and the role that so many Trubians play in ensuring Teacher success.         


Your User-Id = ${Teacher_username}
Your Password = ${Teacher_password}


`,
      Regards: "Truba Group Of Institution",
      ContactUs: "https://www.trubainstitute.ac.in/",
    };
    console.log("ye ja rha h api pr" + mailBody)

    axios
      .post(
        `https://personal-eewexkfl.outsystemscloud.com/TrubaErp/rest/SendWelcomeMsg/Email`,
        mailBody
      )
      .then(() => {
        message.success("Teacher Mail Send!");
        alert(`Account Details is send to ${Teacher_eamil}`);
      });
  }
};

const TeacherGeneralInfo = () => {
  return (
    <>
      <div className="add_Teacher_top_general_info">
        <input
          type="file"
          name="file"
          id="fileInput"
          accept="image/*"
          onChange={changeHandler}
        />
      </div>
      <div
        className="add_Teacher_middle_general_info"
        style={{ paddingLeft: "15px", paddingRight: "15px" }}
      >
        <div className="add_Teacher_middle_general_info_input">
          <h3>Teacher Name</h3>
          <Input
            id="Teacher_name"
            onChange={(e) => (Teacher_name = e.target.value)}
          />
        </div>
        <div className="add_Teacher_middle_general_info_input">
          <h3>Teacher Email</h3>
          <Input
            id="Teacher_email"
            onChange={(e) => (Teacher_eamil = e.target.value)}
          />
        </div>
        <div className="add_Teacher_middle_general_info_input">
          <h3>Teacher Phone Number</h3>
          <Input
            id="Teacher_number"
            onChange={(e) => (Teacher_number = e.target.value)}
          />
        </div>
        <div className="add_Teacher_middle_general_info_input">
          <h3>Teacher Alternet Phone Number</h3>
          <Input
            id="Teacher_number"
            onChange={(e) => (Teacher_numberAlter = e.target.value)}
          />
        </div>
        <div className="add_Teacher_middle_general_info_input">
          <h3>Teacher Address</h3>
          <Input.TextArea
            id="Teacher_address"
            onChange={(e) => (Teacher_address = e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

const EducationHistory = () => {
  const [schoolName, setSchoolName] = useState("");
  const [subjectName, setSubjectlName] = useState("");
  const [courseType, setCourse] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [startAt, setStart] = useState("");
  const [endAt, setEnd] = useState("");

  useEffect(() => { }, [listOfHistory]);

  const printData = () => {
    listOfHistory = [
      ...listOfHistory,
      {
        id: historyID,
        subjects: subjectName,
      },
    ];
    historyID++;
    setSubjectlName("");
    setEnd("");
    SubjectsList = listOfHistory;
    console.log(SubjectsList);
  };

  function onChange(value) {
    console.log(`selected ${value}`);
    setSubjectlName(value);
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  const removeItem = (id) => { };
  return (
    <div className="education-history">
      <div style={{ display: "flex", justifyContent: "space-between" }}>

        <div
          style={{ flex: "0.4" }}
          className="add_Teacher_middle_general_info_input"
        >
          <h3>Add Subjects</h3>
          <Select style={{ "width": "1000px" }}
            showSearch
            placeholder="Select Subjects"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Chemistry">Chemistry</Option>
            <Option value="Maths">Maths</Option>
          </Select>
        </div>
      </div>
      <button className="logout_btn" onClick={printData}>
        ADD
      </button>
      <div className="education-Teacher-list">
        {listOfHistory.length > 0 ? (
          listOfHistory.map((item) => (
            <div className="education-card">
              <h3 style={{ "alignItems": "center" }}>{item.subjects}</h3>
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
      <Divider />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: "0.4" }}>
          <div className="add_Teacher_middle_general_info_input">
            <h3>Teacher ID</h3>
            <Input onChange={(e) => (Teacher_username = e.target.value)} />
          </div>

          <div className="add_Teacher_middle_general_info_input">
            <h3>Teacher Password</h3>
            <Input onChange={(e) => (Teacher_password = e.target.value)} />
          </div>
        </div>
      </div>
    </div>
  );
};

const { Step } = Steps;
const AddTeacher = () => {
  const steps = [
    {
      title: "General Info",
      content: <TeacherGeneralInfo />,
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
    <div className="admin-add-Teacher">
      <div>
        <h1>Add Teacher</h1>
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

export default AddTeacher;
