import { useSelector } from "react-redux";
import ProjectItem from "../Projects/ProjectsList/ProjectItem/ProjectItem";
import classes from "./Home.module.css";

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
      <div className={classes.img}></div>
      <div className={classes.info}>
        <h1>Baitemir Asanbaev</h1>
        <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
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