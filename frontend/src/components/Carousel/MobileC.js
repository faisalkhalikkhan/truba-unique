import React from "react";
import "./mcm.css";

import { useNavigate } from "react-router-dom";
const MobileC = () => {
  const nevigate = useNavigate();
  return (
    <div className="mobileC">
      <div>
        <img src="/boy.jpg" style={{ width: "100%" }} />
      </div>
      <div style={{ padding: "5px" }}>
        <div className="mobileC_color_box">
          <div className="mobileC_box">
            <h1>welcome</h1>
            <p>
              Indescribable oppression, which seemed to generate in some
              unfamiliar part of her consciousness, filled her whole being with
              a vague anguish. It was like a shadow, like a mist passing across
              her soul's summer day. It was strange and unfamiliar;
            </p>
            <button onClick={() => nevigate("/login")} className="login_btn">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileC;
