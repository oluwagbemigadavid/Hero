import clsx from 'clsx';
import React, { useState } from 'react';

const CustomSquare = ({ className, gap, children, nav, refProp, style, onClick }) => {
  const [ishovered, setIshovered] = useState(false)

  const handleHover = (e) => {
    e.stopPropagation()
    setIshovered(true)
  }

  const handleMouseLeave = () => {
    setIshovered(false);
  };
  
  return (
    <div 
    className={clsx('square relative w-[150px] h-[60px] flex item-center justify-center cursor-pointer transition-all duration-[750ms] ease-in-out', className)} 
    onMouseOver={handleHover}
    onMouseLeave={handleMouseLeave}
    ref={refProp}
    style={style}
    onClick={onClick}

  >
    <div className={clsx("absolute w-full square-bg h-full flex justify-start items-start left-0 top-0 ", {
      'square-bg-not-active': nav && !ishovered,
    })}>
     
    <div className="w-[50px] h-full">
        <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 50 100" 
              width="100%" 
              height="100%" 
              preserveAspectRatio="none"
            >
              <defs>
                <path id="corner" d="M -2 -2 L 6 -2 Q 0 0 -2 6 Z" />
                <mask id="hex">
                  <path d="M 0 0 L 100 0 L 100 100 L 25 100 L 0 75 Z" fill="white"/>
                  <g fill="black">
                  <use transform="translate(1 1)" href="#corner" />
                    <use transform="translate(-0.8 74.8) rotate(-68)" href="#corner" />
                    <use transform="translate(25 100.5) rotate(-113)" href="#corner" />
                  </g>
                </mask>
              </defs>
              <rect width="100%" height="100%" mask="url(#hex)" fill='blue'/>
            </svg>
      </div>
      <div className="w-full h-full square-middle relative">
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
                <path id="corner" d="M -2 -2 L 6 -2 Q 0 0 -2 6 Z" />
                <mask id="hex">
                  <path d="M 0 0 L 100 0 L 100 100 L 25 100 L 0 75 Z" fill="white"/>
                  <g fill="black">
                  <use transform="translate(1 1)" href="#corner" />
                    <use transform="translate(-0.8 74.8) rotate(-68)" href="#corner" />
                    <use transform="translate(25 100.5) rotate(-113)" href="#corner" />
                  </g>
                </mask>
              </defs>
              <rect width="100%" height="100%" mask="url(#hex)" fill='blue'/>
            </svg>
      </div>

    </div>
    
    <div className={clsx(' flex items-center justify-center w-full h-full relative z-10', gap)} >
      {children}
    </div>
  </div>
  );
};

export default CustomSquare;
