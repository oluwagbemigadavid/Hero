import React, { useContext, useState } from "react";
import { menuList } from "../../utils";

export const initialState = {activemenu: menuList[0], setActiveMenu: (_) => {}}

const NavContext = React.createContext(initialState)

const NavProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(initialState.activemenu)

  return (
    <NavContext.Provider value={{activeMenu, setActiveMenu}}>
      {children}
    </NavContext.Provider>
  )
}

const useNav = () => {
  return useContext(NavContext)
}

export { NavProvider, useNav}