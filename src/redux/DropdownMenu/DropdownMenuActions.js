import {
  CLOSE_DROPDROWN_MENU,
  SELECT_DROPDOWN_OPTION,
  TOGGLE_DROPDROWN_MENU,
} from "./DropdownMenuConstants";

export const closeDropdownMenu = () => ({
  type: CLOSE_DROPDROWN_MENU,
});

export const toggleDropdownMenu = () => ({
  type: TOGGLE_DROPDROWN_MENU,
});

export const optionSelect = (option) => async (dispatch) => {
  await localStorage.setItem("option", option);
  dispatch({
    type: SELECT_DROPDOWN_OPTION,
    payload: {
      option,
    },
  });
};
