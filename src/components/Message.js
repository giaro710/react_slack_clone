import React from "react";
import "../css/Message.css";

const Message = ({ id, message, timestamp, user, userImage }) => {
  return (
    <div className="message" key={id}>
      <div className="message__image-container">
        <img className="message__image" src={userImage} alt="User" />
      </div>
      <div className="message__info">
        <h4>
          {user}
          <span className="message__timestamp">
            {new Date(timestamp.toDate()).toUTCString()}
          </span>
        </h4>
        <p className="message__text">{message}</p>
      </div>
    </div>
  );
};

export default Message;
