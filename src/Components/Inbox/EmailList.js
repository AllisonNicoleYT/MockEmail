import React from "react";
import { Link } from "react-router-dom";
import { DummyEmailData } from "./DummyEmailData";
import "../../App.css";

function EmailList() {
  return (
    <div className="email-list">
      <ul>
        {DummyEmailData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                <h1>{item.name}</h1>
                <p>{item.subject}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EmailList;
