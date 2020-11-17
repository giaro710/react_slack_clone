import React from "react";
import { useHistory } from "react-router-dom";
import "../css/SidebarOption.css";
import db from "../firebase";

const SidebarOption = ({ Icon, title, id, addChannelOption, channelTitle }) => {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      id={id}
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3
          className={`sidebarOption__channel ${
            channelTitle ? "sidebarOption__channel--title" : ""
          }`}
        >
          <span className="sidebarOption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
