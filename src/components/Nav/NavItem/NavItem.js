import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.css";

const NavItem = ({ url, children, exact, click }) => {
  return (<div className={classes.NavItem}>
    <li onClick={click} className={classes.li}>
      <NavLink to={url} activeStyle={{ color: "rgb(143, 256, 199)" }} exact={exact}>{children}</NavLink>
    </li>
  </div>);
}

export default NavItem;