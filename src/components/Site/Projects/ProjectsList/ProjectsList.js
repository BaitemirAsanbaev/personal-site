import { Link } from "react-router-dom";
import classes from "./ProjectsList.module.css";

const ProjectsList = () => {
  return (
    <div className={classes.ProjectsList}>
      <Link to={"/projects/music-maker"}>Music-maker</Link>
      <Link to={"/projects/personal-site"}>Personal site</Link>
    </div>
  );
}

export default ProjectsList;