import { PaperClipOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React, { useEffect, useState } from "react";
import Post from "./Posts/Post";
import "./tg.css";
import { db } from "../../firebase";
import axios from "axios";
import { useSelector } from "react-redux";

const Trugram = () => {
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);
  console.log(posts);
  const [image, setImage] = useState("");
  const [input, setInput] = useState("");
  const handleImageUpload = () => {
    const fileInput = document.querySelector("#fileInput");
    axios
      .put(
        "https://personal-eewexkfl.outsystemscloud.com/TrubaErp/rest/Image_To_ID/Image_To_ID",
        fileInput.files[0]
      )
      .then((response) => {
        message.success("Picture Uploaded");
        setImage(
          `https://personal-eewexkfl.outsystemscloud.com/TrubaErp/rest/Image_To_ID/ID_To_Image?ID=${response.data["ImageID"]}`
        );
      });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    db.collection("posts").add({
      username: user.username,
      message: input,
      timestamp: new Date(),
      profilePic: user.picture,
      pitcure: image,
    });
  };
  return (
    <div className="trugram">
      <div className="trugram__body">
        <div className="trugram__body_message_sender">
          <form onSubmit={onSubmitHandler}>
            <div className="trugram__body_message_sender_top">
              <Avatar size={45} src={`${user.picture}`} />
              <h3>{user.name}</h3>
              <input
                type="file"
                accept="image/jpeg"
                id="fileInput"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <Button
                className="logout_btn"
                type="primary"
                shape="circle"
                icon={<PaperClipOutlined />}
                size="small"
                onClick={() => {
                  message.info("Hello");
                  document.getElementById("fileInput").click();
                }}
              />
              <Input
                style={{ marginLeft: "10px", marginRight: "10px" }}
                placeholder="Whats in your mind,"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button
                htmlType="submit"
                className="logout_btn"
                type="primary"
                shape="circle"
                icon={<SendOutlined />}
                size="small"
              />
            </div>
          </form>
        </div>
        <div className="trugram__posts">
          {posts.map((element) => (
            <Post
              key={element.id}
              username={element.data.username}
              picture={element.data.pitcure}
              message={element.data.message}
              profilePic={element.data.profilePic}
              timestamp={element.data.timestamp}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trugram;
