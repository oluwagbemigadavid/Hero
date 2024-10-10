import React, { useEffect } from 'react'
import { Nav } from '../../components'
import { useNav } from '../../providers'

const MainLayout = ({children}) => {
  const {activeMenu, setActiveMenu} = useNav()
  
  return (
    <div>
      <div className="m-[24px] relative">
        <div className="absolute top-0 left-0 w-full h-full">
          
          <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 100 100" 
              width="100%" 
              height="100%" 
              preserveAspectRatio="none"
            >
              <defs>
                <path id="main-corner" d="M -2 -2 L 6 -2 Q 0 0 -2 6 Z" />
                <mask id="hex">
                  <path d="M 0 0 L 100 0 L 100 100 L 25 100 L 0 75 Z" fill="white"/>
                  <g fill="black">
                    <use transform="translate(-0.8 74.8) rotate(-68)" href="#main-corner" />
                    <use transform="translate(25 100.5) rotate(-113)" href="#main-corner" />
                  </g>
                </mask>
              </defs>
              <rect width="100%" height="100%" mask="url(#hex)" fill='#32313090' rx="5"/>
            </svg>
        </div>
        <Nav />
        <div className="py-[120px] pl-[200px] rounded-lg">
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout
