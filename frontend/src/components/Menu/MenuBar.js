import {
  ContactsOutlined,
  CustomerServiceOutlined,
  DownOutlined,
  HomeFilled,
  IdcardOutlined,
  MenuOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons/lib/icons";
import { Drawer, Button } from "antd";
import { useState } from "react";
import "./mb.css";

const MenuBar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="menu_bar">
      <h2 id="menu_title">Truba Erp</h2>
      <div className="menu_item_div">
        <h3 className="active_h3">
          <span>HOME</span>
        </h3>
        <h3>
          <span>
            MORE <DownOutlined />
          </span>
        </h3>
        <h3>
          <span>ABOUT</span>
        </h3>
        <h3>
          <span>CONTACT</span>
        </h3>
        <h3>
          <span>
            Search <SearchOutlined />
          </span>
        </h3>
      </div>
      <Button
        className="menu_btn_vibl"
        // type="primary"
        onClick={showDrawer}
        shape="circle"
        icon={<MenuOutlined style={{ color: "#781c68" }} />}
        size="large"
      />
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <div>
          <p className="menu_mobile_item">
            <HomeFilled style={{ color: "#781c68", marginRight: "15px" }} />{" "}
            HOME
          </p>
          <p className="menu_mobile_item">
            <IdcardOutlined style={{ color: "#781c68", marginRight: "15px" }} />{" "}
            ABOUT
          </p>
          <p className="menu_mobile_item">
            <ContactsOutlined
              style={{ color: "#781c68", marginRight: "15px" }}
            />{" "}
            CONTACT
          </p>
          <p className="menu_mobile_item">
            <CustomerServiceOutlined
              style={{ color: "#781c68", marginRight: "15px" }}
            />{" "}
            SERVICES
          </p>
          <p className="menu_mobile_item">
            <QuestionCircleOutlined
              style={{ color: "#781c68", marginRight: "15px" }}
            />{" "}
            FAQ
          </p>
        </div>
        <div className="mobile_menu_footer">
          <span className="mobile_menu_footer_span">TRUBA</span>
          <p>GROUP OF INSTITUTE</p>
        </div>
      </Drawer>
    </div>
  );
};

export default MenuBar;
