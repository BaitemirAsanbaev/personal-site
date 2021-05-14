import { Route } from "react-router";
import Project from "./Project/Project";
import classes from "./Projects.module.css";
import ProjectsList from "./ProjectsList/ProjectsList";

const Projects = ({match}) => {
  return ( <div className={classes.Projects}>
    <h1>Projects</h1>
      { match.isExact
      ? <ProjectsList/>
      : <Route path='/projects/:id' component={Project}/>}
  </div> );
}
 
export default Projects;