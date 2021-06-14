import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = ({ click }) => {
  return (<div className={classes.Nav}>
    <ul>
      <NavItem click={click} url="/" exact>Home</NavItem>
      <NavItem click={click} url="/projects">Projects</NavItem>
      <NavItem click={click} url="/about">About</NavItem>
      <NavItem click={click} url="/contacts">Contacts</NavItem>
    </ul>
  </div>);
}

export default Nav;