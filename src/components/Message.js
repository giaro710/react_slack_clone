import React from "react";
import "../css/Message.css";

const Message = ({ id, message, timestamp, user, userImage }) => {
  return (
    <div className="message" key={id}>
      <img src={userImage} alt="User" />
      <div className="message__info">
        <h4>
          {user} <span>timestamp</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
