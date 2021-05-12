import Drawer from "./Drawer/Drawer";
import classes from "./Layout.module.css";
import Toolbar from "./Toolbar/Toolbar";

const Layout = ({children}) => {
  return ( <div className={classes.Layout}>
    <Toolbar/>
    <Drawer/>
    <main>
      {children}
    </main>
  </div> );
}
 
export default Layout;