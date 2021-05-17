import classes from "./Project.module.css";
import mus_img from "../../../../images/music-maker.png";

const Project = ({match}) => {

  let project_name = "";
  const links = [];
  let screenshot = [];

    switch (match.params.id) {
      case "music-maker":
        project_name = "Music maker"
        links.push(<ul>
          <li><a href='https://github.com/BaitemirAsanbaev/music-maker' rel="noreferrer" target='_blank'>GitHub repository</a></li>
          <li><a href='https://baitemir-asanbaev.netlify.app/' rel="noreferrer" target='_blank'>Netlify link</a></li>
        </ul>)
        screenshot.push(<img alt="s" className={classes.screenshot} src={mus_img}/>)
        
        break;
      case "personal-site":  
        project_name = "Personal site"
        links.push(<ul>
          <li><a href='https://github.com/BaitemirAsanbaev/personal-site' rel="noreferrer" target='_blank'>GitHub repository</a></li>
          <li><a href='https://baitemir.netlify.app/' rel="noreferrer" target='_blank'>Netlify link</a></li>
        </ul>)
        screenshot.push(<img alt="s" className={classes.screenshot} src={mus_img}/>)
        break;
      case "kanye-western":  
        project_name = "Kanye Western"
        links.push(<ul>
          <li><a href='https://github.com/BaitemirAsanbaev/kanye-western' rel="noreferrer" target='_blank'>GitHub repository</a></li>
          <li><a href='https://kanye-western.netlify.app/' rel="noreferrer" target='_blank'>Netlify link</a></li>
        </ul>)
        screenshot.push(<img alt="s" className={classes.screenshot} src={mus_img}/>)
        break;
      
      default:
        break;
    }

  return ( <div className={classes.Project}>
      <div className={classes.info}>
        <h1>{project_name}</h1>
        <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      {links}
      </div>
      <div className={classes.img}>
        {screenshot}
      </div>
  </div> );
}
 
export default Project;