import Nav from "../../Nav/Nav";
import DrawerOpen from "../Drawer/DrawerOpen/DrawerOpen";
import classes from "./Toolbar.module.css";

const Toolbar = ({openDrawer}) => {
  return ( <div className={classes.Toolbar}>
    <nav>
      <Nav/>
    </nav>
    <DrawerOpen click={openDrawer}/>
  </div> );
}
 
export default Toolbar;