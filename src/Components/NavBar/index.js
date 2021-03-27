import React from "react";
import logo from "./kite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import { connect } from "react-redux";

function NavBar({ userName, points }) {
  return (
    <nav>
      <div className="titleContainer">AeroRewards Program</div>
      <div className="logoContainer">
        <img src={logo} width="35" height="35" alt="" />
      </div>
      <div className="profileContainer">
        Welcome {userName}! - {points}
        <FontAwesomeIcon
          className="icon"
          icon={faCoins}
          width="15"
          height="15"
        />
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    userName: state.user.name,
    points: state.user.points,
  };
};

export default connect(mapStateToProps)(NavBar);
