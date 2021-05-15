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
    let type = "";
    switch (project) {
      case "music-maker":
        label = "Music maker"
        type = "ReactJS"
        break;
      case "personal-site":
        label = "Personal site"
        type = "Design/Layout"
        break;
      case "kanye-western":
        label = "Kanye western"
        type = "JavaScript"
        break;
    
      default:
        break;
    }
    output.push(<ProjectItem url={project} label={label} type={type}/>)
}

  return ( <div className={classes.Projects}>
    <h1>Projects</h1>
      { match.isExact
      ? <ProjectsList output = {output}/>
      : <Route path='/projects/:id' component={Project}/>}
  </div> );
}
 
export default Projects;