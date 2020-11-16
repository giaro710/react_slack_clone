import React from "react";
import "../css/Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" alt="foto" src="#" />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input
          className="header__search--input"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
