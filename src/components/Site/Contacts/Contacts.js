import classes from "./Contacts.module.css";
import gh from "../../../images/github-icon.svg"
import ln from "../../../images/linkedin-icon.svg"
import em from "../../../images/email-icon.svg"
import tg from "../../../images/telegram-icon.svg"
import ig from "../../../images/instagram-icon.svg"

const Contacts = () => {
  return ( <div className={classes.Contacts}>
    <h1>Contacts</h1>
    <ul>
      <li><a
      href='https://github.com/BaitemirAsanbaev'
      rel="noreferrer"
      target='_blank'>
        <img
        className={classes.icon}
        alt="icon"
        src={gh}/>
        <span>GitHub</span>
        </a></li>
      <li><a
      href='https://www.linkedin.com/in/baitemir' 
      rel="noreferrer"
      target='_blank'>
        <img
        className={classes.icon}
        alt="icon"
        src={ln}/>
        <span>LinkedIn</span>
        </a></li>
      <li><a
      href='mailto:baitemir1706@gmail.com'
      rel="noreferrer"
      target='_blank'>
        <img
          className={classes.icon}
          alt="icon"
          src={em}/>
          <span>Email</span>
          </a></li>
      <li><a
      href='https://t.me/baitemir17'
      rel="noreferrer"
      target='_blank'>
        <img className={classes.icon}
        alt="icon"
        src={tg}/>
        <span>Telegram</span>
        </a></li>
      <li><a
      href='https://www.instagram.com/baitemir17/'
      rel="noreferrer"
      target='_blank'>
        <img
        className={classes.icon}
        alt="icon"
        src={ig}/>
        <span>Instagram</span>
        </a></li>
    </ul>
  </div> );
}
 
export default Contacts;