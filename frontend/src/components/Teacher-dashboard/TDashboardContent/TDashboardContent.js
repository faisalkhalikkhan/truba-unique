import { SearchOutlined } from "@ant-design/icons/lib/icons";
import "./Td.css";
import axios from "axios";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions"
import CardContent from '@mui/material/CardContent';
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import { ListGroup } from 'react-bootstrap'




const TDashboardContent = () => {
  const [Students, setStudents] = useState([]);
  const fetchStudents = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/student/get-students"
    )
    const Students = data;
    setStudents(Students);
    console.log(Students["length"]);
  };
  const [teachers, setteachers] = useState([]);
  const fetchteachers = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/teacher/get-teachers"
    )
    const teachers = data;
    setteachers(teachers);
    console.log(teachers["length"]);
  };


  useEffect(() => {
    fetchStudents();
    fetchteachers();
  }, []);
  return (
    <div>
      <div style={{ "display": "flex", "justifyContent": "space-between" }}>
        <Card style={{ "alignItems": "center", "display": "inline-block" }} sx={{ maxWidth: 345 }} >
          <img src="https://cdn.ila-france.com/wp-content/uploads/2015/02/our-students.jpg" style={{ "height": "200px", "width": "300px" }}></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ "padding": "auto" }}>
              Total Students
            </Typography>
            <Typography gutterBottom variant="h6" component="div" style={{ "padding": "auto" }}>
              {Students["length"]}  and Counting.....
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ "alignItems": "center", "display": "inline-block" }} sx={{ maxWidth: 345 }} >
          <img src="https://media.edutopia.org/styles/responsive_2880px_16x9/s3/masters/d7_images/cover_media/alber-169hero-thelook-shutterstock_0.jpg" style={{ "height": "200px", "width": "300px" }}></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ "padding": "auto" }}>
              Total Teachers
            </Typography>
            <Typography gutterBottom variant="h6" component="div" style={{ "padding": "auto" }}>
              {teachers["length"]}  and Counting.....
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ "alignItems": "center", "display": "inline-block" }} sx={{ maxWidth: 345 }} >
          <img src="https://cdn.lifehack.org/wp-content/uploads/2014/02/40-Inspirational-Quotes-Every-Graduate-Student-Should-Know1.jpg" style={{ "height": "200px", "width": "300px" }}></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ "padding": "auto" }}>
              Total Graduated Students
            </Typography>
            <Typography gutterBottom variant="h6" component="div" style={{ "padding": "auto" }}>
              433 Student has successfully completly graduated.....
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TDashboardContent;
