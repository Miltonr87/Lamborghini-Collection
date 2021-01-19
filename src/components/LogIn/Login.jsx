import React, {useState} from "react";
//import Input from "./Input";
import "./Login.css";
import PlayboyLogo from "../../assets/Logo/playboyLogo.png";
import PlayboyLogged from "../../assets/Logo/playboy-wide.png";
import { Link } from "react-router-dom";

function Login() {
  const [inputData, setInputData] = useState({username: "", password: ""})
  const [contactsData, setContactsData] = useState([])
  const date = new Date().getFullYear();


  function handleChange(event) {
    const {name, value} = event.target
    setInputData(prevInputData => ({...prevInputData, [name]: value}))
}

  function handleSubmit(event) {
     event.preventDefault()
    setContactsData(prevContacts => [...prevContacts, inputData])
}

  console.log(inputData)
  const welcome = contactsData.map(contact => (
    <div className="container__logged">
    <h2>Welcome {contact.username}! <br></br> Click below: </h2>
    <Link to="/home"><img className="playboy__logged" src={PlayboyLogged} alt="Click to enter" /></Link>
    </div>
    ))

  return (
    <div className="container__logged">
      <form className="form" onSubmit={handleSubmit}>
        <img
          src={PlayboyLogo}
          style={{ marginBottom: "20px", height: "10rem" }}
          alt="Playboy Logo"
        />
        
        <input className="login__input" 
        type="text"
         placeholder="Username" 
         name="username" 
         value={inputData.login}
         onChange={handleChange} required
          />
        <input
          className="login__input"
          type="password"
          placeholder="Password"
          name="password" 
          value={inputData.password}
          onChange={handleChange} required
        />
          <button className="button__confirm">Login</button>
          {welcome}
      </form>
      <footer>
      <p> © Milton Rodrigues - {date} </p>
      </footer>
      
    </div>
  );
}

export default Login;
