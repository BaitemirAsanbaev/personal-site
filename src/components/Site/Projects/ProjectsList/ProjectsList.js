import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem/ProjectItem";
import classes from "./ProjectsList.module.css";

const ProjectsList = () => {
  const output = [];
  const projects = ["music-maker",
    "personal-site",
    "kanye-western"
  ]
  for (const project of projects) {
    output.push(<ProjectItem url={project}/>)
  }
  return (
    <div className={classes.ProjectsList}>
      {output}
    </div>
  );
}

export default ProjectsList;