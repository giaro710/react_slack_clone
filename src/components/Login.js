import React from "react";
import "../css/Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          className="login__image"
          src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
          alt="Slack logo"
        />
        <h1>Sign in to Code Freaks</h1>
        <p>codefreaks.slack.com</p>
        <Button onClick={signIn} className="login__btn">
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
