import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
  return ( <div className={classes.Nav}>
    <ul>
      <NavItem url="/" exact>Home</NavItem>
      <NavItem url="/projects">Projects</NavItem>
      <NavItem url="/bout">About</NavItem>
      <NavItem url="/contacts">Contacts</NavItem>
    </ul>
  </div> );
}
 
export default Nav;