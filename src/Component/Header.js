import "../App.css";
import Nwabutton from "./Nwabutton";

function Header(props) {
  return (
    <div className="header">
      <h1>Task Manager</h1>
      <div className="btnwrapper"></div>
      <Nwabutton
        click={props.handleinput}
        name="Add"
        bg="#005a9c"
        color="white"
      />
    </div>
  );
}

export default Header;
