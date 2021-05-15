import classes from "./Project.module.css";

const Project = ({label}) => {

  let project_name = "";

    switch (match.params.id) {
      case "music-maker":
        project_name = "Music-maker"
        break;
      case "personal-site":  
        project_name.push(<h1>PS</h1>)
        break;
      case "kanye-western":  
        project_name.push(<h1>KW</h1>)
        break;
      
      default:
        break;
    }

  return ( <div className={classes.Project}>
      <div className={classes.info}>
        <h1></h1>
      </div>
      <div className={classes.img}>

      </div>
  </div> );
}
 
export default Project;