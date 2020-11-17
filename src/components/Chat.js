import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import db from "../firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

import "../css/Chat.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  const renderMessages = () => {
    return roomMessages.map(({ id, message, timestamp, user, userImage }) => {
      return (
        <Message
          id={id}
          message={message}
          timestamp={timestamp}
          user={user}
          userImage={userImage}
        />
      );
    });
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__header--left">
          <h4 className="chat__channel--name">
            <strong>{roomDetails?.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__header--right">
          <p>
            <InfoIcon /> Details
          </p>
        </div>
      </div>

      <div className="chat__messages">{renderMessages()}</div>

      <ChatInput channelName={roomDetails?.name} channelId={roomDetails?.id} />
    </div>
  );
};

export default Chat;
