import React from "react";
import "./Title.css";

const NavBar = props => 
<nav className="navbar navbar-dark bg-dark">
  <h1 className="navbar-brand">{props.children}</h1>
  <span className="navbar-text">
      {props.result}     Score: {props.score} | Top Score: {props.topScore}
    </span>
</nav>
;

export default NavBar;
