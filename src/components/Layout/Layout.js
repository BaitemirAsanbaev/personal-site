import { useState } from "react";
import Drawer from "./Drawer/Drawer";
import classes from "./Layout.module.css";
import Toolbar from "./Toolbar/Toolbar";

const Layout = ({children}) => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  return ( <div className={classes.Layout}>
    <Toolbar openDrawer={() => setDrawerOpen(true)} />
    <Drawer open={drawerOpen} closeDrawer={()=>setDrawerOpen(false)}/>
    <main>
      {children}
    </main>
  </div> );
}
 
export default Layout;