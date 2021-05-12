import classes from "./Backdrop.module.css";

const Backdrop = ({show, click}) => {
  return ( 
    show ? <div className={classes.Backdrop} onClick={click}>Backdrop</div> : null
    );
}
 
export default Backdrop;