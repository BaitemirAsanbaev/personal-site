import Nav from "../../Nav/Nav";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Logo from "../../UI/Logo/Logo";
import classes from "./Drawer.module.css";

const Drawer = () => {
  return ( <div className={classes.Drawer}>
    <Backdrop/>
    <div>
      <Logo/>
      <Nav/>
    </div>
  </div> );
}
 
export default Drawer;