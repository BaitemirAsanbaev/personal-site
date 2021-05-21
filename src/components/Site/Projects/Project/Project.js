import classes from "./Project.module.css";
import mus_img from "../../../../images/music-maker.png";
import kw_img from "../../../../images/kanye-western.png";
import ps_img from "../../../../images/personal-site.png";
import ap_img from "../../../../images/apple.png";

const Project = ({match}) => {

  let project_name = "";
  const links = [];
  let screenshot = [];

    switch (match.params.id) {
      case "music-maker":
        project_name = "Music maker"
        links.push(<ul className={classes.links}>
          <li><a href='https://github.com/BaitemirAsanbaev/music-maker' rel="noreferrer" target='_blank'>GitHub repository</a></li>
        </ul>)
        screenshot.push(<a href='https://baitemir-asanbaev.netlify.app/' rel="noreferrer" target='_blank'><img alt="s" className={classes.screenshot} src={mus_img}/></a>)

        break;
      case "personal-site":  
        project_name = "Personal site"
        links.push(<ul className={classes.links}>
          <li><a href='https://github.com/BaitemirAsanbaev/personal-site' rel="noreferrer" target='_blank'>GitHub repository</a></li>
        </ul>)
        screenshot.push(<a href='https://baitemir.netlify.app/' rel="noreferrer" target='_blank'><img alt="s" className={classes.screenshot} src={ps_img}/></a>)
        break;
      case "kanye-western":  
        project_name = "Kanye Western"
        links.push(<ul className={classes.links}>
          <li><a href='https://github.com/BaitemirAsanbaev/kanye-western' rel="noreferrer" target='_blank'>GitHub repository</a></li>
        </ul>)
        screenshot.push(<a href='https://kanye-western.netlify.app/' rel="noreferrer" target='_blank'><img alt="s" className={classes.screenshot} src={kw_img}/></a>)
        break;
      case "apple-copy":  
        project_name = "Apple copy"
        links.push(<ul className={classes.links}>
          <li><a href='https://github.com/BaitemirAsanbaev/apple-copy' rel="noreferrer" target='_blank'>GitHub repository</a></li>
        </ul>)
        screenshot.push(<a href='https://apple-layout.netlify.app/' rel="noreferrer" target='_blank'><img alt="s" className={classes.screenshot} src={ap_img}/></a>)
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
        <span>Visit site</span>
      </div>
  </div> );
}
 
export default Project;