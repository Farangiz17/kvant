import React from "react";
import CrumbComponent from "./ps-breadCrumb.component";

export default function CrumbContainer(props) {
 
  return (
    <div className="crumb-container">
      <CrumbComponent state={props} />
    </div>
  );
}
