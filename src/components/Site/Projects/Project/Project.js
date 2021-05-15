import classes from "./Project.module.css";

const Project = ({match}) => {

  const result = [];

    switch (match.params.id) {
      case "music-maker":
        result.push(<h1>MM</h1>)
        break;
      case "personal-site":  
        result.push(<h1>PS</h1>)
        break;
      case "kanye-western":  
        result.push(<h1>KW</h1>)
        break;
      
      default:
        break;
    }

  return ( <div className={classes.Project}>

    {result}
  </div> );
}
 
export default Project;