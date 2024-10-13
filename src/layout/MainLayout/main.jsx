import React, { useEffect } from 'react'
import { Nav, Register } from '../../components'
import { useNav } from '../../providers'
import clsx from 'clsx'

const MainLayout = ({children}) => {
  const {request} = useNav()
  
  return (
    <div className='main realtive w-full h-full overflow-hidden bg-blue-100'>
      <div className= {clsx(
        "main-container m-[24px] relative bg-blue-200 w-full  flex gap-[48px]",
       {
        'main-request': request
       }
       )}>
        <Register />
       <div className="w-full h-full relative main-contents">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none"> 
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
                <rect width="100%" height="100%" mask="url(#hex)" fill='#323130' rx="2"/>
              </svg>
          </div>
          <Nav />
          <div className="relative pt-[132px] pl-[200px] rounded-lg z-10 overflow-hidden">
            {children}
          </div>
       </div>
      </div>
    </div>
  )
}

export default MainLayout
