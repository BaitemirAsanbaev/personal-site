import classes from "./Project.module.css";

const Project = ({match}) => {

  const result = [];

    switch (match.params.id) {
      case "music-maker":
        result.push("asdfgjkjk")
        break;
      case "personal-site":  
        result.push("asdfg")
        break;
      
      default:
        break;
    }

  return ( <div className={classes.Project}>
    <span>{match.params.id}</span>

    {result}
  </div> );
}
 
export default Project;