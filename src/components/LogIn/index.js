import React, { useState } from "react";
import {
  LoginContainer,
  VideoBg,
  LoginInput,
  ButtonConfirm,
  Signature,
} from "./styles";
import LamborghiniLogo from "../../assets/Logo/Lamborghini-Logo.png";
import LamborghiniLogged from "../../assets/Media/lamborghini.mp4";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputData, setInputData] = useState({ username: "", password: "" });
  const [contactsData, setContactsData] = useState([]);
  const date = new Date().getFullYear();
  const welcome = contactsData.map((contact) => (
    <LoginContainer>
      <h2>
        Welcome {contact.username}! <br />
      </h2>
      <br />
      <Link to="/home">
        <VideoBg
          autoPlay
          src={LamborghiniLogged}
          type="video/mp4"
          alt="Enter"
        />
      </Link>
    </LoginContainer>
  ));

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setContactsData((prevContacts) => [...prevContacts, inputData]);
  }

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <img
          src={LamborghiniLogo}
          style={{ marginBottom: "20px", height: "10rem" }}
          alt="Lamborghini Logo"
        />
        <LoginInput
          type="text"
          placeholder="Username"
          name="username"
          value={inputData.login}
          onChange={handleChange}
          required
        />
        <LoginInput
          type="password"
          placeholder="Password"
          name="password"
          value={inputData.password}
          onChange={handleChange}
          required
        />
        <ButtonConfirm>Login</ButtonConfirm>
        {welcome}
      </form>
      <Signature>
        <br />
        <p> © Milton Rodrigues - {date} </p>
      </Signature>
    </LoginContainer>
  );
};

export default Login;
