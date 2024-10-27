import React, { useContext, useEffect, useState } from "react";
import { menuList } from "../../utils";

export const initialState = {activemenu:
  {
    name: 'Home',
    value: 'home'
  }, setActiveMenu: (_) => {}}

const NavContext = React.createContext(initialState)

const NavProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(initialState.activemenu)
  const [navSwitch, setNavSwitch] = useState(false)
  const [request, setRequest] = useState(false)
  const [isFromNav, setIsFromNav] = useState(false)

  useEffect(() => {
    if(navSwitch) {
      setTimeout(() => {
        setNavSwitch(false)
      }, 1200);
    }
  }, [activeMenu, navSwitch])
  

  return (
    <NavContext.Provider value={{
      activeMenu, 
      setActiveMenu, 
      navSwitch, 
      setNavSwitch,
      request,
      setRequest,
      isFromNav,
      setIsFromNav
      }}>
      {children}
    </NavContext.Provider>
  )
}

const useNav = () => {
  return useContext(NavContext)
}

export { NavProvider, useNav}