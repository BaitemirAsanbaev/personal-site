import classes from "./Project.module.css";

const Project = ({match}) => {

  let project_name = "";

    switch (match.params.id) {
      case "music-maker":
        project_name = "Music maker"
        break;
      case "personal-site":  
        project_name = "Personal site"
        break;
      case "kanye-western":  
        project_name = "Kanye Western"
        break;
      
      default:
        break;
    }

  return ( <div className={classes.Project}>
      <div className={classes.info}>
        <h1>{project_name}</h1>
        <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <ul>
          <li><a href=''>GitHub repository</a></li>
          <li><a href='https://www.baitemir.netlify.app' target='_blank'>Netlify link</a></li>
        </ul>
      </div>
      <div className={classes.img}>

      </div>
  </div> );
}
 
export default Project;