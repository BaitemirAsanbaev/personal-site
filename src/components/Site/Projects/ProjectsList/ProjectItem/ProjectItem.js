import { Link } from "react-router-dom";

const ProjectItem = ({url, label}) => {

  return ( <div>
    <Link to={`/projects/${url}`}>{label}</Link>
    
  </div> );
}
 
export default ProjectItem;