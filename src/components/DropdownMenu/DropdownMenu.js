import React from "react";
import DropdownMenuItem from "./../DropdownMenuItem/DropdownMenuItem";
import {
  PhoneIphoneOutlined,
  GroupOutlined,
  LabelImportantOutlined,
  SettingsOutlined,
  ExitToAppOutlined,
} from "@material-ui/icons";
import "./DropdownMenu.css";

const companies = [{ text: "Viljatootja AS" }, { text: "Tartu Agro OU" }];
const iconLinks = [
  {
    text: "Get the mobile app",
    icon: <PhoneIphoneOutlined fontSize="large" />,
  },
  { text: "Community", icon: <GroupOutlined fontSize="large" /> },
  { text: "Knowledge base", icon: <LabelImportantOutlined fontSize="large" /> },
];

const DropdownMenu = () => {
  return (
    <div className="menu-list">
      <h3 className="menu-list-title">Your Companies</h3>
      {companies.map((company) => (
        <DropdownMenuItem key={company.text} {...company} />
      ))}
      <hr />
      {iconLinks.map((link) => (
        <DropdownMenuItem key={link.text} {...link} />
      ))}
      <hr />
      <div className="menu-item">
        <span className="menuItem-icon">
          <SettingsOutlined fontSize="large" />
        </span>
        Settings
      </div>
      <div
        className="menu-item"
        style={{
          color: "red",
          borderBottomLeftRadius: "16px",
          borderBottomRightRadius: "16px",
        }}
      >
        <span className="menuItem-icon">
          <ExitToAppOutlined fontSize="large" />
        </span>
        Logout
      </div>
    </div>
  );
};

export default DropdownMenu;
