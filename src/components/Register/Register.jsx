import clsx from 'clsx'
import React from 'react'
import { useNav } from '../../providers'

const Register = ({className}) => {

  const {setRequest} = useNav()

  const handleClose = () => {
    setRequest(false)
  }
  return (
    <div className={clsx('relative w-[500px] overflow-hidden register h-full p-[24px]', className)}>
      <div className="w-full h-full text-black">
        
         
      <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100" 
          width="100%" 
          height="100%" 
          preserveAspectRatio="none"
        >
          <defs>
            <path id="corner-register" d="M -2 -2 L 6 -2 Q 0 0 -2 6 Z" />
            <path id="corner-register1" d="M -2 -2 L 6 -4.1 Q 0 0 -4 7 Z" />
            <mask id="hex-register">
              <path d="M 0 0 L 65 0 L 100 12 L 100 100 L 0 100 Z" fill="white"/>
              <g fill="black">
                <use transform="translate(64.8 -0.5) rotate(56.8)" href="#corner-register1" />
                <use transform="translate(99 11.5) rotate(90)" href="#corner-register" />
              </g>
            </mask>
          </defs>
          <rect width="100%" height="100%" mask="url(#hex-register)" rx={"2"} fill='rgba(255, 255, 255, 1)'  />
        </svg>
      </div>
          <div className=" relative z-10">
            <h1 className="text-2xl " onClick={handleClose}>
              Close me
            </h1>
          </div>
      </div>
    </div>
  )
}

export default Register
