import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import "./p.css";

const Post = ({ username, profilePic, message, picture, timestamp }) => {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar size={45} src={profilePic} />

        <div className="post_top_left">
          <span>{username}</span>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post_message">
        <p>{message}</p>
      </div>
      <div
        style={{ display: `${picture.length <= 0 ? "none" : "block"}` }}
        className="post_image"
      >
        <img src={picture} />
      </div>
      <div style={{ height: "40px", width: "100%" }}></div>
    </div>
  );
};

export default Post;
