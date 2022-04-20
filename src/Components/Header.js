import React from "react";
import { Link } from "react-router-dom";
import DropdownMenuItem from "./DropdownMenuItem";
import MenuItems from "./MenuItems";

const Header = () => {
  return (
    <div className="flex flex-col pt-6">
      <div className="flex flex-row">
        <div className="w-full flex justify-center">
          <Link to="/" className="text-2xl">
            <h1>Enicy</h1>
          </Link>
        </div>
        <MenuItems menuItemName="winkelmandje" />
      </div>
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