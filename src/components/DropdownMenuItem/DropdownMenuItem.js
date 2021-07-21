import React, { useState, useEffect } from "react";
import { DoneOutlined } from "@material-ui/icons";
import "./DropdownMenuItem.css";
import { connect } from "react-redux";
import { optionSelect } from "../../redux/DropdownMenu/DropdownMenuActions";

const DropdownMenuItem = (props) => {
  const { icon = "", text, optionSelect } = props;
  const [focus, setFocus] = useState(false);
  const [lastSelected, setLastSelected] = useState("");
  var lastSelectedOption = null;
  useEffect(() => {
    async function retrieveOption() {
      lastSelectedOption = await localStorage.getItem("option");
      setLastSelected(lastSelectedOption);
    }
    retrieveOption();
  }, []);
  return (
    <div
      className={`${text === lastSelected ? "slected-option" : "menu-item"}`}
      onClick={() => optionSelect(text)}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      {icon && <span className="menuItem-icon">{icon}</span>}
      {text}
      {focus && <DoneOutlined fontSize="small" className="hover-icon" />}
    </div>
  );
};
const actions = {
  optionSelect,
};
export default connect(null, actions)(DropdownMenuItem);
