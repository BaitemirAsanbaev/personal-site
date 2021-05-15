import classes from "./Project.module.css";

const Project = ({match}) => {

  let project_name = "";

    switch (match.params.id) {
      case "music-maker":
        project_name = "MM"
        break;
      case "personal-site":  
        project_name = "PS"
        break;
      case "kanye-western":  
        project_name = "KW"
        break;
      
      default:
        break;
    }

  return ( <div className={classes.Project}>
      <div className={classes.info}>
        <h1>{project_name}</h1>
      </div>
      <div className={classes.img}>

      </div>
  </div> );
}
 
export default Project;