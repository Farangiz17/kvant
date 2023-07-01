import React from "react";
import SelectComponent from "./select.component";
import InputComponent from "./input.component";
import ButtonComponent from "./button.component";

export default function HeaderSearchBar({data}) {
  return (
    <div className="header_searchbar_component">
      <form className="header_form">
       <SelectComponent data={data}/>
       <InputComponent/>
       <ButtonComponent/>
      </form>
    </div>
  );
}
