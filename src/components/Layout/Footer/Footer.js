import classes from "./Footer.module.css";
import axios from "axios"

const Footer = () => {

  function submitCallback(event) {

    const data = new FormData(event.target)
    axios.post("https://personal-site-test-ef345-default-rtdb.firebaseio.com//users.json", {
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      email: data.get('email'),

    }).then(
      console.log("dfghj")
    )

    event.preventDefault();
  }

  return (<div className={classes.Footer}>
    <div>
      <h2>Connect with me</h2>
      <form onSubmit={submitCallback}>
        <label>First name</label>
        <input required type="text" name="firstname" />
        <label>Last name</label>
        <input required type="text" name="lastname" />
        <label>Email</label>
        <input required type="email" name="email" />
        <button>Submit</button>
      </form>
    </div>

    <small>©Copyright 2021 BaitemirAsanbaev</small>
  </div>);
}

export default Footer;