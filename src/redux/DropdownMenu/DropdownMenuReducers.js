import {
  CLOSE_DROPDROWN_MENU,
  SELECT_DROPDOWN_OPTION,
  TOGGLE_DROPDROWN_MENU,
} from "./DropdownMenuConstants";

const initialState = {
  open: false,
  selectedOption: "",
};

const DropdownMenuReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLOSE_DROPDROWN_MENU:
      return { ...state, open: false };
    case TOGGLE_DROPDROWN_MENU:
      return { ...state, open: !state.open };
    case SELECT_DROPDOWN_OPTION:
      return { ...state, open: false, selectedOption: payload.option };
    default:
      return state;
  }
};

export default DropdownMenuReducer;
