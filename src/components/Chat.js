import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import db from "../firebase";

import "../css/Chat.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState({});

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .document(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
  }, [roomId]);

  console.log(roomDetails);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__header--left">
          <h4 className="chat__channel--name">
            <strong></strong>
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
