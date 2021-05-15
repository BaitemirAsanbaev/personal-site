import { Route, Switch } from "react-router";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import classes from "./Site.module.css";

const Site = () => {
  return ( <div className={classes.Site}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contacts" component={Contacts}/>
      </Switch>
  </div> );
}
 
export default Site;