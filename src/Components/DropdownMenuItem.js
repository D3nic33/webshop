import React from "react";
import { Link } from "react-router-dom";

const DropdownMenuItem = ({linkName}) => {

  function Capitalize (str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return(
    <div className="group px-10">
      <div className="relative inline-block py-3">
        <Link className="px-5" to={linkName}>{Capitalize(linkName)}</Link>
      </div>
      <div className="hidden absolute group-hover:block py-2 px-2 h-1/4 overflow-scroll">
        <Link className="px-3 py-1 block" to={`${linkName}/tops`}>Tops</Link>
        <Link className="px-3 py-1 block" to="/blazers">Blazers</Link>
        <Link className="px-3 py-1 block" to="/vests-and-cardigans">Vesten en cardigans</Link>
        <Link className="px-3 py-1 block" to="/hoodies-and-sweaters">Hoodies en sweaters</Link>
        <Link className="px-3 py-1 block" to="/pants">Broeken</Link>
        <Link className="px-3 py-1 block" to="/skirts">Rokken</Link>
        <Link className="px-3 py-1 block" to="/dresses">Jurken</Link>
      </div>
    </div>    
  )
}

export default DropdownMenuItem;