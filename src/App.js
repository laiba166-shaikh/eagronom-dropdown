import "./App.css";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import SettingsButton from "./components/SettingsButton/SettingsButton";
import { connect } from "react-redux";
import { closeDropdownMenu } from "./redux/DropdownMenu/DropdownMenuActions";

const App = ({ open, closeDropdownMenu }) => {
  return (
    <div
      className="container"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeDropdownMenu();
        }
      }}
    >
      <SettingsButton />
      {open && <DropdownMenu />}
    </div>
  );
};
const mapState = (state) => ({
  open: state.dropDownMenu.open,
});
const actions = {
  closeDropdownMenu,
};
export default connect(mapState, actions)(App);
