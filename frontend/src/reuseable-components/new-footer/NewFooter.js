import React from "react";
import "./nf.css";
import {
  CopyrightOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterSquareFilled,
} from "@ant-design/icons/lib/icons";

const NewFooter = () => {
  return (
    <div className="new_footer">
      <div className="new_footer_main">
        <div className="new_footer_grid">
          <h3 className="new_footer_grid_h3">About</h3>
          <h3 className="new_footer_grid_h3">Search</h3>
          <h3 className="new_footer_grid_h3">Phone</h3>
          <h3 className="new_footer_grid_h3">Contact Us</h3>
          <h3 className="new_footer_grid_h3">Address</h3>
          <h3 className="new_footer_grid_h3">E-mail</h3>
          <h3 className="new_footer_grid_h3">Services</h3>
          <h3 className="new_footer_grid_h3">Login</h3>
        </div>
        <div className="new_footer__icons_div">
          <FacebookFilled className="new_footer__icons" />
          <TwitterSquareFilled className="new_footer__icons" />
          <LinkedinFilled className="new_footer__icons" />
          <InstagramFilled className="new_footer__icons" />
        </div>
        <div className="new_footer_bottom">
          <p>
            <CopyrightOutlined /> 2021 TrubaERP&#8482;{" "}
          </p>
          <span className="helpandSupport">Help &#38; Support</span>
        </div>
      </div>
    </div>
  );
};

export default NewFooter;
