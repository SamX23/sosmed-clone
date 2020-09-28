import React from "react";
import {
  Search as SearchIcon,
  Home as HomeIcon,
  Flag as FlagIcon,
  SubscriptionsOutlined as SubscriptionsOutlinedIcon,
  StorefrontOutlined as StorefrontOutlinedIcon,
  SupervisedUserCircle as SupervisedUserCircleIcon,
} from "@material-ui/icons";

import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />

        <div className="header__input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__middle">
        <div className="header__option">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
