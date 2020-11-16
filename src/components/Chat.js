import React from "react";
import { useParams } from "react-router-dom";

import "../css/Chat.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";

const Chat = () => {
  const { roomId } = useParams();
  console.log(roomId);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__header--left">
          <h4 className="chat__channel--name">
            <strong>#General</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__header--right">
          <p>
            <InfoIcon /> Details
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
