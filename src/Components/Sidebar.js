import React from "react";
import "../../App.css";
import { NavData } from "./SidebarData";

const Nav = () => {
  return (
    <div className="Navbar">
      <ul className="NavbarList">
        {NavData.map((value, key) => {
          return (
            <li
              key={key}
              className="NavbarRow"
              id={window.location.pathname == value.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              {" "}
              <div id="icon">{value.icon}</div>{" "}
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
