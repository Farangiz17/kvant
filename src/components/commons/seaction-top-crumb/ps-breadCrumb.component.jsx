import React from "react";
import { Link } from "react-router-dom";

export default function CrumbComponent(props) {
  // console.log(props, "props");
  return (
    <div className="crumb-component">
      <div className="container">
        <ul className="breadCrumb">
          <li className="breadCrumb-item">
            <Link to="/">{props.state.glavni}</Link>
          </li>
          <li className="breadCrumb-item">{props.state.this}</li>
        </ul>
      </div>
    </div>
  );
}
