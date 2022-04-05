import React from "react";
import "./cm.css";
import { useNavigate } from "react-router-dom";

const CarouselMain = () => {
  const nevigate = useNavigate();
  return (
    <div>
      <div className="carousel">
        <div className="carousel_left">
          <div className="carousel_left_colorBox">
            <div className="carousel_left_box">
              <h1>welcome</h1>
              <p>
                Indescribable oppression, which seemed to generate in some
                unfamiliar part of her consciousness, filled her whole being
                with a vague anguish. It was like a shadow, like a mist passing
                across her soul's summer day. It was strange and unfamiliar;
              </p>
              <button onClick={() => nevigate("/login")} className="login_btn">
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="carousel_right">
          <div className="carousel_circle"></div>
          <div>
            <img
              className="img"
              src="/boy.jpg"
              style={{ width: "700px", height: "300px", marginLeft: "90px" }}
            />
          </div>
          <div className="carousel_rectangle"></div>
        </div>
      </div>
    </div>
  );
};

export default CarouselMain;
