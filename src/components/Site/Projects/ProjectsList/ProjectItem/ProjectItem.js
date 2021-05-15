import { Link } from "react-router-dom";

const ProjectItem = ({url}) => {
  let label = "";
  switch (url) {
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

  return ( <div>
    <Link to={`/projects/${url}`}>{label}</Link>
    
  </div> );
}
 
export default ProjectItem;