import clsx from 'clsx'
import React from 'react'
import { useNav } from '../../providers'

const Register = ({className}) => {

  const {setRequest} = useNav()

  const handleClose = () => {
    setRequest(false)
  }
  return (
    <div className={clsx('relative w-[500px] overflow-hidden register h-full', className)}>
      <div className="w-full h-full text-black">
        
         
      <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[120px] h-[120px]">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100" 
            width="100%" 
            height="100%" 
            preserveAspectRatio="none"
          >
            <defs>
              <path id="corner-register2" d="M 0 0 L 100 0 L 100 100 L 0 100 Z" />
              <mask id="hex-register2">
                <path d="M 0 0 L 100 0 L 100 12 L 100 100 L 0 100 Z" fill="white"/>
                <g fill="black">
                  <use transform="translate(-10 -5) scale(1.8) rotate(40)" href="#corner-register2" />
                </g>
              </mask>
            </defs>
            <rect width="100%" height="100%" mask="url(#hex-register2)" rx={"3"} fill='rgba(255, 255, 255, 1)'  />
          </svg>
        </div>
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
              <path d="M 0 0 L 65 0 L 100 15 L 100 100 L 0 100 Z" fill="white"/>
              <g fill="black">
                <use transform="translate(64.8 -0.5) rotate(56.8)" href="#corner-register1" />
                <use transform="translate(99 11.5) rotate(90)" href="#corner-register" />
              </g>
            </mask>
          </defs>
          <rect width="100%" height="100%" mask="url(#hex-register)" rx={"2"} fill='rgba(255, 255, 255, 1)'  />
        </svg>
      </div>
          <div className="relative z-10 w-full h-full ">
            <div className="absolute top-0 right-[-8px] transform rotate-[40deg] cursor-pointer py-3 px-10 "  onClick={handleClose}>
              <h1 className="text-2xl transform rotate-[-40deg] text-3xl font-bold">
                X
              </h1>
            </div>
            <div className="w-full h-full flex flex-col justify-between items-start p-[24px]">
              <div className="border-[1px] rounded-full border-[#00000080] w-[30px] h-[30px] flex justify-center items-center font-bold text-[#00000080] hover:text-[#000000] hover:border-[#000000] cursor-pointer transition duration-350">
                ?
              </div>
              <div className="flex w-full gap-8 flex-col justify-start items-start">
                <p className="font-bold">Enter your phone number</p>
                
                <div 
                  className={clsx('relative w-[150px] h-[60px] flex item-center justify-center cursor-pointer transition-all duration-[750ms] ease-in-out')} 

                >
                  <div className={clsx("absolute w-full square-bg h-full flex justify-center items-center left-0 top-0  ",  )}>
                  
                  <div className="w-[35px] absolute left-0 top-0  h-full">
                      <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 50 100" 
                            width="100%" 
                            height="100%" 
                            preserveAspectRatio="none"
                          >
                            <defs>
                              <path id="corner-request" d="M -2 -2 L 6 -2 Q 0 0 -2 6 Z"  stroke="black" strokeWidth={'3px'} />
                              <mask id="hex-request">
                                <path d="M 0 0 L 100 0 L 100 100 L 25 100 L 0 75 Z" fill="white"/>
                                <g fill="black">
                                <use transform="translate(1 1)" href="#corner-request" />
                                  <use transform="translate(-0.8 74.8) rotate(-68)" href="#corner-request" />
                                  <use transform="translate(25 100.5) rotate(-113)" href="#corner-request" />
                                </g>
                              </mask>
                            </defs>
                            <rect width="100%" height="100%" mask="url(#hex)" fill='transparent' rx={'8'} stroke="#00000020" strokeWidth={'3px'} />
                          </svg>
                    </div>
                    <div className="w-[120px] h-full square-middle bg-white z-10 relative border-y-[1px] border-[#00000030]">
                    </div>
                    <div className="w-[35px] absolute right-0 top-0 h-full bg-green transform rotate-180">
                      <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 50 100" 
                            width="100%" 
                            height="100%" 
                            preserveAspectRatio="none"
                          >
                            <defs>
                              <path id="corner-request" d="M -2 -2 L 6 -2 Q 0 0 -2 6 Z" />
                              <mask id="hex-request">
                                <path d="M 0 0 L 100 0 L 100 100 L 25 100 L 0 75 Z" fill="white"/>
                                <g fill="black">
                                <use transform="translate(1 1)" href="#corner-request" />
                                  <use transform="translate(-0.8 74.8) rotate(-68)" href="#corner-request" />
                                  <use transform="translate(25 100.5) rotate(-113)" href="#corner-request" />
                                </g>
                              </mask>
                            </defs>
                            <rect width="100%" height="100%" mask="url(#hex-request)" fill='transparent' rx={'8'} stroke="#00000020" strokeWidth={'3px'}  />
                          </svg>
                    </div>

                  </div>
                  
                  <div className={clsx(' flex items-center justify-center w-full h-full relative z-10')} >
                    Send request
                  </div>
                </div>


                <div 
                  className={clsx('relative w-full h-[60px] flex item-center justify-center cursor-pointer transition-all duration-[750ms] ease-in-out')} 

                >
                  <div className={clsx("absolute w-full square-bg h-full flex justify-center items-center left-0 top-0  ",  )}>
                  
                  <div className="w-[50px] h-full">
                      <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 50 100" 
                            width="100%" 
                            height="100%" 
                            preserveAspectRatio="none"
                          >
                            <defs>
                              <path id="corner-request" d="M -2 -2 L 6 -2 Q 0 0 -2 6 Z"  stroke="black" strokeWidth={'3px'} />
                              <mask id="hex-request">
                                <path d="M 0 0 L 100 0 L 100 100 L 25 100 L 0 75 Z" fill="white"/>
                                <g fill="black">
                                <use transform="translate(1 1)" href="#corner-request" />
                                  <use transform="translate(-0.8 74.8) rotate(-68)" href="#corner-request" />
                                  <use transform="translate(25 100.5) rotate(-113)" href="#corner-request" />
                                </g>
                              </mask>
                            </defs>
                            <rect width="100%" height="100%" mask="url(#hex)" fill='blue' />
                          </svg>
                    </div>
                    <div className="w-full h-full square-middle bg-blue-800 z-10 relative  ">
                    </div>
                    <div className="w-[50px] h-full bg-green transform rotate-180">
                      <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 50 100" 
                            width="100%" 
                            height="100%" 
                            preserveAspectRatio="none"
                          >
                            <defs>
                              <path id="corner-request" d="M -2 -2 L 6 -2 Q 0 0 -2 6 Z" />
                              <mask id="hex-request">
                                <path d="M 0 0 L 100 0 L 100 100 L 25 100 L 0 75 Z" fill="white"/>
                                <g fill="black">
                                <use transform="translate(1 1)" href="#corner-request" />
                                  <use transform="translate(-0.8 74.8) rotate(-68)" href="#corner-request" />
                                  <use transform="translate(25 100.5) rotate(-113)" href="#corner-request" />
                                </g>
                              </mask>
                            </defs>
                            <rect width="100%" height="100%" mask="url(#hex-request)" fill='blue'/>
                          </svg>
                    </div>

                  </div>
                  
                  <div className={clsx(' flex items-center justify-center w-full h-full relative z-10')} >
                    Send request
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <p className='font-bold text-[#00000080] text-center text-xl w-90 '>By continuing, you accept the <a href="" className='underline text-[#00000080]'>Regulations</a> and the <a href="" className='underline text-[#00000080]'>Privacy Policy</a></p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Register
