import classes from "./ProjectItem.module.css";
import { Link } from "react-router-dom";

const ProjectItem = ({url, label, type}) => {
  let color;
  switch (type) {
    case "ReactJS":
      color = "#61dafb"
      break;
    case "JavaScript":
      color = "#fcdc00"
      break;
    case "Design/Layout":
      color = "#ff2672"
      break;
  
    default:
      break;
  }

  return (<Link className={classes.link} to={`/projects/${url}`}>
    <div>
      <div className={classes.hov_label} style={{backgroundColor: color}}><span>{type}</span></div>
      <div className={classes.label}>{label}</div>
    </div>
  </Link>);
}
 
export default ProjectItem;