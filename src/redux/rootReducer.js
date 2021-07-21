import { combineReducers } from "redux";
import DropdownMenuReducer from "./DropdownMenu/DropdownMenuReducers";

var rootReducer = combineReducers({
  dropDownMenu: DropdownMenuReducer,
});

export default rootReducer;
