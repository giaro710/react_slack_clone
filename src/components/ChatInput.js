import React, { useState } from "react";
import firebase from "firebase";
import db from "../firebase";
import { useStateValue } from "../StateProvider";

import "../css/ChatInput.css";

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();
  console.log(input);
  console.log(user);
  console.log(`This is the ${channelId}`);

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection("rooms")
        .doc(channelId)
        .collection("messages")
        .add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user: user.displayName,
          userImage: user.photoURL,
        })
        .then(function () {
          console.log("done succesfully");
        })
        .catch((error) => alert(error));
    }
  };

  return (
    <div className="chat__input">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
