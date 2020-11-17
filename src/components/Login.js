import React from "react";
import "../css/Login.css";
import { Button } from "@material-ui/core";

function Login() {
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
        <Button className="login__btn">Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
