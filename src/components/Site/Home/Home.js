import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  return (<div className={classes.Home}>
    <div className={classes.home_about}>
      <div className={classes.img}></div>
      <div className={classes.info}>
        <h1>Baitemir Asanbaev</h1>
        <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>
    </div>
    <div className={classes.best_projects}>
      <Link to={"/projects/music-maker"}>Music-maker</Link>
      <Link to={"/projects/personal-site"}>Personal site</Link>
    </div>
  </div>);
}

export default Home;