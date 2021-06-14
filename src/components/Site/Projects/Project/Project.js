import classes from "./Project.module.css";
import mus_img from "../../../../images/music-maker.png";
import kw_img from "../../../../images/kanye-western.png";
import ps_img from "../../../../images/personal-site.png";
import ap_img from "../../../../images/apple.png";
import hrz_img from "../../../../images/horizon.png";
import knm_img from "../../../../images/mizusashi.png";
import drgn_img from "../../../../images/dragon.png";

const Project = ({ match }) => {

  let project_name = "Project '?'";
  let project_description = "unckown project please check the URL";
  const links = [];
  const screenshot = [];


  switch (match.params.id) {
    case "music-maker":
      project_name = "Music maker";

      project_description = "Music-maker where you can create great melodies and save it. Or listen music already exists. This app was created with ReactJS, based on Firebase and hosted on Netlify ";

      links.push(<ul className={classes.links}>
        <li><a
          href='https://github.com/BaitemirAsanbaev/music-maker'
          rel="noreferrer"
          target='_blank'>
          GitHub repository
        </a></li>
      </ul>);

      screenshot.push(<a
        href='https://baitemir-asanbaev.netlify.app/'
        rel="noreferrer" target='_blank'>
        <img alt="s"
          className={classes.screenshot}
          src={mus_img} />
      </a>);
      break;


    case "personal-site":

      project_name = "Personal site"

      project_description = "My personal site where you can find information about me and see my projects. Btw you are already here))";

      links.push(<ul className={classes.links}>
        <li><a
          href='https://github.com/BaitemirAsanbaev/personal-site'
          rel="noreferrer"
          target='_blank'>
          GitHub repository
        </a></li>
      </ul>);

      screenshot.push(<a
        href='https://baitemir.netlify.app/'
        rel="noreferrer"
        target='_blank'>
        <img alt="s"
          className={classes.screenshot}
          src={ps_img} />
      </a>);
      break;


    case "kanye-western":

      project_name = "Kanye Western"

      project_description = "Web-game made using JavaScript. In this game you will shoot Kenye Wests head and collect bullets. If you waste all your bullets, you'll have to listen Kanye Wests song but in Spanish!";

      links.push(<ul className={classes.links}>
        <li><a
          href='https://github.com/BaitemirAsanbaev/kanye-western'
          rel="noreferrer"
          target='_blank'>
          GitHub repository
        </a></li>
      </ul>);

      screenshot.push(<a
        href='https://kanye-western.netlify.app/'
        rel="noreferrer"
        target='_blank'>
        <img
          alt="s"
          className={classes.screenshot}
          src={kw_img} />
      </a>);
      break;


    case "apple-copy":

      project_name = "Apple copy"

      project_description = "Layout of Apple's website. I used only HTML and CSS to made it.";

      links.push(<ul className={classes.links}>
        <li><a
          href='https://github.com/BaitemirAsanbaev/apple-copy'
          rel="noreferrer"
          target='_blank'>
          GitHub repository
        </a></li>
      </ul>);

      screenshot.push(<a
        href='https://apple-layout.netlify.app/'
        rel="noreferrer"
        target='_blank'>
        <img
          alt="s"
          className={classes.screenshot}
          src={ap_img} />
      </a>);
      break;

    case "horizon":

      project_name = "Horizon"

      project_description = "Horizontal site. This site is unique because it scrolls right/left instead of up/down. I used only HTML and CSS to made it.";

      links.push(<ul className={classes.links}>
        <li><a
          href='https://github.com/BaitemirAsanbaev/horizon'
          rel="noreferrer"
          target='_blank'>
          GitHub repository
        </a></li>
      </ul>);

      screenshot.push(<a
        href='https://horizon-site.netlify.app/'
        rel="noreferrer"
        target='_blank'>
        <img
          alt="s"
          className={classes.screenshot}
          src={hrz_img} />
      </a>);
      break;

    case "bottle":

      project_name = "Bottle game"

      project_description = "Bottle game. Game for a friends group (max 6 people). In this game person who get the bottle neck have to do the dare which appears on the screen. I used HTML CSS and JavaScript to made it.";

      links.push(<ul className={classes.links}>
        <li><a
          href='https://github.com/BaitemirAsanbaev/bottle'
          rel="noreferrer"
          target='_blank'>
          GitHub repository
        </a></li>
      </ul>);

      screenshot.push(<a
        href='https://game-bottle.netlify.app/'
        rel="noreferrer"
        target='_blank'>
        <img
          alt="s"
          className={classes.screenshot}
          src={hrz_img} />
      </a>);
      break;
    case "kin-no-mizusashi":

      project_name = "Kin no mizusashi"

      project_description = "Medical herbs shop's site. I made it using HTML and CSS";

      links.push(<ul className={classes.links}>
        <li><a
          href='https://github.com/BaitemirAsanbaev/kin-no-mizusashi'
          rel="noreferrer"
          target='_blank'>
          GitHub repository
        </a></li>
      </ul>);

      screenshot.push(<a
        href='https://kin-no-mizusashi.netlify.app/'
        rel="noreferrer"
        target='_blank'>
        <img
          alt="s"
          className={classes.screenshot}
          src={knm_img} />
      </a>);
      break;

    case "dragon":

      project_name = "Animated dragon"

      project_description = "Animated dragon that can born you (be careful). I made it using HTML/CSS and JavaScript";

      links.push(<ul className={classes.links}>
        <li><a
          href='https://github.com/BaitemirAsanbaev/dragon-animation'
          rel="noreferrer"
          target='_blank'>
          GitHub repository
        </a></li>
      </ul>);

      screenshot.push(<a
        href='https://dragon-animation.netlify.app/'
        rel="noreferrer"
        target='_blank'>
        <img
          alt="s"
          className={classes.screenshot}
          src={drgn_img} />
      </a>);
      break;

    default:
      break;
  }

  return (<div className={classes.Project}>
    <div className={classes.info}>
      <h1>{project_name}</h1>
      <p>{project_description}</p>
      {links}
    </div>
    <div className={classes.img}>
      {screenshot}
      <span>Visit site</span>
    </div>
  </div>);
}

export default Project;