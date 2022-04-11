import "./App.css";
import "antd/dist/antd.css";
import Login from "./components/Login/Login";
import LandingPage from "./LandingPage";
import Tspinner from "./reuseable-components/Truba-Spinner/Tspinner";
import SDashboard from "./components/Student-dashboard/SDashboard";
import { Route, Routes } from "react-router-dom";

import { useState } from "react";
import Dashboard from "./components/Student-dashboard/Dashboard/Dashboard";
import TimeTable from "./components/Student-dashboard/TimeTable/TimeTable";
import ApplyForLeave from "./components/Student-dashboard/ApplyForLeave/ApplyForLeave";
import Page404 from "./reuseable-components/404/Page404";
import Admin from "./components/Admin/Admin";
import StudentAccount from "./components/Student-dashboard/Account/StudentAccount";
import Trugram from './components/Trugram/Trugram'
import Profile from "./components/Student-dashboard/Profile/Profile";
import Overview from "./components/Admin/Overview/Overview";
import Student from "./components/Admin/Student/Student";
import AddStudent from "./components/Admin/Student/AddStudent";
import AddTeacher from "./components/Admin/Teacher/AddTeacher";
import Teacher from "./components/Admin/Teacher/Teacher";

import TDashboard from "./components/Teacher-dashboard/TDashboard";
import TTimeTable from "./components/Teacher-dashboard/TTimeTable/TTimeTable";
import TAccount from "./components/Teacher-dashboard/TAccount/TAccount";
import TStudents from "./components/Teacher-dashboard/TStudents/TStudents";
import TDashboardContent from "./components/Teacher-dashboard/TDashboardContent/TDashboardContent";

function App() {
  const [loading, setLoader] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/student-dashboard" element={<SDashboard />}>
          <Route path="" element={<Dashboard />} />
          <Route path="time-table" element={<TimeTable />} />
          <Route path="apply-for-leave" element={<ApplyForLeave />} />
          <Route path="account" element={<StudentAccount />} />
          <Route path="profile" element={<Profile />} />
          <Route path="trugram" element={<Trugram />} />
        </Route>
        <Route path="/teacher-dashboard" element={<TDashboard />}>
          <Route path="" element={<TDashboardContent/>} />
          <Route path="time-table" element={<TTimeTable />} />
          <Route path="students" element={<TStudents />} />
          <Route path="account" element={<TAccount />} />
          <Route path="trugram" element={<Trugram />} />
        </Route>
        <Route path="/admin" exact element={<Admin />}>
        <Route path="" element={<Overview />} />
        <Route path="student" element={<Student />} />
        <Route path="add-student" element={<AddStudent />} />
        <Route path="teacher" element={<Teacher />} />
        <Route path="add-teacher" element={<AddTeacher />} />
        <Route path="trugram" element={<Trugram />} />

        </Route>
        {/* <Route path="/trugram"  element={<Trugram />} /> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
      {loading && <Tspinner />}
    </div>
  );
}

export default App;
