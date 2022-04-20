import React from "react";
import { Link } from "react-router-dom";
import DropdownMenuItem from "./DropdownMenuItem";

const Header = () => {
  return (
    <div className="flex flex-col pt-6">
      <Link to="/" className="text-center text-2xl">
        <h1>Enicy</h1>
      </Link>
      <div className="flex flex-row justify-center py-5 text-lg">
        <DropdownMenuItem linkName="woman" />
        <DropdownMenuItem linkName="men" />
        <DropdownMenuItem linkName="kids" />
        <DropdownMenuItem linkName="sale" />
      </div>
    </div>
  );
}

export default Header;