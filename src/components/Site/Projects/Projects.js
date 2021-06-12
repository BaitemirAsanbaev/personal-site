import { useSelector } from "react-redux";
import { Route } from "react-router";
import Project from "./Project/Project";
import classes from "./Projects.module.css";
import ProjectsList from "./ProjectsList/ProjectsList";
import ProjectItem from "../Projects/ProjectsList/ProjectItem/ProjectItem"

const Projects = ({ match }) => {

  const projects = useSelector(state => state);
  const output = [];
  for (const project of projects) {
    let label = "";
    let type = "";
    switch (project) {
      case "music-maker":
        label = "Music maker"
        type = "ReactJS"
        break;
      case "personal-site":
        label = "Personal site"
        type = "ReactJS"
        break;
      case "kanye-western":
        label = "Kanye western"
        type = "JavaScript"
        break;
      case "apple-copy":
        label = "Apple copy"
        type = "Design/Layout"
        break;    
      case "horizon":
        label = "Horizon"
        type = "Design/Layout"
        break;
      case "bottle":
        label = "Bottle game"
        type = "JavaScript"
        break;
    
  
      default:
        break;
    }
    output.push(<ProjectItem url={project} label={label} type={type} />)
  }

  return (<div className={classes.Projects}>
    <h1>Projects</h1>
    { match.isExact
      ? <ProjectsList output={output} />
      : <Route path='/projects/:id' component={Project} />}
  </div>);
}

export default Projects;