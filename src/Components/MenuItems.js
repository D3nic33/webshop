import React from "react";
import { ShoppingBagIcon } from '@heroicons/react/outline'

const MenuItems = ({menuItemName, MenuItemIcon}) => {

  
  return(
    <div className="flex justify-end px-5">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <ShoppingBagIcon className="h-6 w-6"/>
        
        </div>
        {/* <span className="text-sm">
          {menuItemName}
        </span> */}
      </div>
    </div>
  )
}

export default MenuItems;