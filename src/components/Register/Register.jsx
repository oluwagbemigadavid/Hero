import clsx from 'clsx'
import React from 'react'
import { useNav } from '../../providers'

const Register = ({className}) => {

  const {setRequest} = useNav()

  const handleClose = () => {
    setRequest(false)
  }
  return (
    <div className={clsx('relative w-[500px] overflow-hidden h-full p-[24px]', className)}>
      <div className="w-full h-full text-black">
        
          <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
          <svg width="100" height="100" className='absolute right-0 top-0' xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,0 100,100 0,100" fill="black" />
</svg>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 100 100" 
                    width="100%" 
                    height="100%" 
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <path id="register" d="M -2 -2 L 6 -2 Q 0 0 -2 6 Z" />
                      <mask id="register">
                        <path d="M 0 0 L 85 0 L 100 15 L 100 100 L 0 100 Z" fill="#ffffff500"/>
                        <g fill="black">
                          <use transform="translate(84.8 -0.7) rotate(68)" href="#register" />
                          <use transform="translate(100 13.5) rotate(109)" href="#register" />
                        </g>
                      </mask>
                    </defs>
                    <rect width="100%" height="100%" mask="register" rx={"2"} fill='rgba(255, 255, 255, 1)'  />
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
