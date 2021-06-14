import classes from "./About.module.css";

const About = () => {
  return (<div className={classes.About}>
    <h1>About</h1>
    <div className={classes.about_info}>
      <h2>Let's get acquainted</h2>
      <p>
        Hi there. I'm Baitemir and I'm web developer. I create great web-sites using ReactJS. Also I'm always ready to learn new technologies and fields. For now my skills are: HTML5, CSS3, JavaScript, ReactJS, Redux, Router-DOM, Ajax, GitHub, Firebase, Figma, Adobe Illustrator, Asobe Photoshop. Skills I'll learn soon: React Native, Python/Django, WordPress, Adobe AfterEffects, PHP, SEOf.<br />
      </p>
    </div>
  </div>);
}

export default About;