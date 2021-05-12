import classes from "./DrawerOpen.module.css";

const DrawerOpen = ({click}) => {
  return ( <div className={classes.DrawerOpen}>
    <h1 onClick={click}>Open Dr</h1>
  </div> );
}
 
export default DrawerOpen;