import React from "react";
import HeaderLogo from "./header-logo/header-logo";
import HeaderSearchBar from "./header-search/header-searchbar.container";
import HeaderActions from "./header-action/header-actions.component";
import { Link } from "react-router-dom";

export default function HeaderComponent({data}) {
  return (
    <div className="header-component">
      <div className="header-logo-container">
       <Link to='/'> <HeaderLogo /></Link>
      </div>
      <div className="header-searchbar">
        <HeaderSearchBar data={data} />
      </div>
      <div className="header-right">
        <HeaderActions />
      </div>
    </div>
  );
}
