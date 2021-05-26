import { useSelector } from "react-redux";
import ProjectItem from "../Projects/ProjectsList/ProjectItem/ProjectItem";
import classes from "./Home.module.css";
import avatar from "../../../images/baitemir.jpg"

const Home = () => {

  const projects = useSelector(state => state);
  const output = [];
  for (const project of projects) {
    let label = "";
    let type = "";
    switch (project) {
      case "music-maker":
        label = "Music maker"
        type = "ReactJS"
        break;
      case "personal-site":
        label = "Personal site"
        type = "ReactJS"
        break;
      case "kanye-western":
        label = "Kanye western"
        type = "JavaScript"
        break;
      case "apple-copy":
        label = "Apple copy"
        type = "Design/Layout"
        break;
  
      default:
        break;
    }
    output.push(<ProjectItem url={project} label={label} type={type} />)
  }


  return (<div className={classes.Home}>
    <div className={classes.home_about}>
      <div className={classes.img}>
        <img alt="ava" src={avatar}/>
      </div>
      <div className={classes.info}>
        <h1>Baitemir Asanbaev</h1>
        <p>
          Hi there. I'm Baitemir and I'm web developer. I create great web-sites using ReactJS. Also I'm always ready to learn new technologies and fields. 
        </p>
      </div>
    </div>
    <div className={classes.top_projects}>
      <h2>Top projects</h2>
      <div>
        {output}
      </div>
    </div>
  </div>);
}

export default Home;