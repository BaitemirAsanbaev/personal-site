import Nav from "../../Nav/Nav";
import Logo from "../../UI/Logo/Logo";
import DrawerOpen from "../Drawer/DrawerOpen/DrawerOpen";
import classes from "./Toolbar.module.css";

const Toolbar = () => {
  return ( <div className={classes.Toolbar}>
    <Logo/>
    <nav>
      <Nav/>
    </nav>
    <DrawerOpen/>
  </div> );
}
 
export default Toolbar;