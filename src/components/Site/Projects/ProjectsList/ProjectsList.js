import classes from "./ProjectsList.module.css";

const ProjectsList = ({output}) => {

  return (
    <div className={classes.ProjectsList}>
      {output}
    </div>
  );
}

export default ProjectsList;