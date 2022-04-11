import {
  HolderOutlined,
  TrophyOutlined,
  UserOutlined,
} from "@ant-design/icons/lib/icons";
import React from "react";
import "./a.css";

const About = () => {
  return (
    <div className="about">
      <h2>let's know more about us!</h2>
      <div className="about_second">
        <div>
          <h3 style={{ fontWeight: "400" }}>
            <TrophyOutlined style={{ color: "#9f1861", marginRight: "10px" }} />
            College Admissions
          </h3>
          <div className="about_div">
            Indescribable oppression, which seemed to generate in some
            unfamiliar part of her consciousness, filled her whole being with a
            vague anguish. It was like a shadow, like a mist passing across her
            soul's summer day. It was strange and unfamiliar;
          </div>
        </div>
        <div>
          <h3 style={{ fontWeight: "400" }}>
            <HolderOutlined style={{ color: "#9f1861", marginRight: "10px" }} />
            College Management
          </h3>
          <div className="about_div">
            Indescribable oppression, which seemed to generate in some
            unfamiliar part of her consciousness, filled her whole being with a
            vague anguish. It was like a shadow, like a mist passing across her
            soul's summer day. It was strange and unfamiliar;
          </div>
        </div>
        <div>
          <h3 style={{ fontWeight: "400" }}>
            <UserOutlined style={{ color: "#9f1861", marginRight: "10px" }} />
            Our Faculties
          </h3>
          <div className="about_div">
            Indescribable oppression, which seemed to generate in some
            unfamiliar part of her consciousness, filled her whole being with a
            vague anguish. It was like a shadow, like a mist passing across her
            soul's summer day. It was strange and unfamiliar;
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
