import { Route } from "react-router";
import Project from "./Project/Project";
import classes from "./Projects.module.css";
import ProjectItem from "./ProjectsList/ProjectItem/ProjectItem";
import ProjectsList from "./ProjectsList/ProjectsList";

const Projects = ({match}) => {
  const projects = ["music-maker",
    "personal-site",
    "kanye-western"
  ]
  const output = [];
  for (const project of projects) {
    let label = "";
    switch (project) {
      case "music-maker":
        label = "Music maker"
        break;
      case "personal-site":
        label = "Personal site"
        break;
      case "kanye-western":
        label = "Kanye western"
        break;
    
      default:
        break;
    }
    output.push(<ProjectItem url={project} label={label}/>)
}

  return ( <div className={classes.Projects}>
    <h1>Projects</h1>
      { match.isExact
      ? <ProjectsList output = {output}/>
      : <Route path='/projects/:id' label={label} component={Project}/>}
  </div> );
}
 
export default Projects;