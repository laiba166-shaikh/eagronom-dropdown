import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import "./SettingsButton.css";
import { connect } from "react-redux";
import {
  toggleDropdownMenu,
  closeDropdownMenu,
} from "./../../redux/DropdownMenu/DropdownMenuActions";

const SettingsButton = ({ toggleDropdownMenu }) => {
  return (
    <a href="#" className="icon-button" onClick={toggleDropdownMenu}>
      <SettingsIcon fontSize="large" color="#aaa" />
    </a>
  );
};
const actions = {
  toggleDropdownMenu,
};
export default connect(null, actions)(SettingsButton);
