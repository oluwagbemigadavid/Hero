import { useEffect } from 'react';
import { useNav } from '../../providers';
import { CoolText } from '../Custom-Text';
import clsx from 'clsx';

const Hero = () => {
  
  const { activeMenu, navSwitch } = useNav()
  const currentView = activeMenu.value === 'home'
  

  const NEXAis = [
    'Innovation, ',
    'Friendly, Stable,',
    'Accessible,'
  ]

  const title = [
    'A new level of,',
    'free automation,',
    'with NEXA,'
  ]

  
  return (
    <div className="home ">
      <div className="flex w-full h-[100%] relative px-[20px]">

        <div className={clsx("relative top-[60%] flex row-1", {'reverse': navSwitch})}>
          <div className={clsx("w-fit pt-[24px] pr-[40px] title", {'reverse': navSwitch})}>
            <CoolText size={'sm'} className={clsx('text-3xl font-bold')} data={['NEXA is']}  currentView={currentView}  />
          </div>

          <div className="pt-[24px] pl-[40px]">
            <CoolText size={'md'} className={clsx('text-3xl font-bold')} data={NEXAis}  currentView={currentView} />
          </div>
        </div>

        <div className={clsx("row-2 w-full flex-1 flex items-center justify-center", {'reverse': navSwitch})}>
          
            <div className="w-[350px] h-[450px] relative">
              <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 100 100" 
                  width="100%" 
                  height="100%" 
                  preserveAspectRatio="none"
                >
                  <defs>
                    <path id="corner-home" d="M -2 -2 L 6 -2 Q 0 0 -2 6 Z" />
                    <mask id="hex-home">
                      <path d="M 0 0 L 85 0 L 100 15 L 100 100 L 0 100 Z" fill="white"/>
                      <g fill="black">
                        <use transform="translate(84.8 -0.7) rotate(68)" href="#corner-home" />
                        <use transform="translate(100 13.5) rotate(109)" href="#corner-home" />
                      </g>
                    </mask>
                  </defs>
                  <rect width="100%" height="100%" mask="url(#hex-home)" rx={"2"} fill='rgba(255, 255, 255, 0.06)'  />
                </svg>
              </div>
              

                <div className=" p-[24px] h-full flex flex-col justify-between items-start">
                  <h1 className="text-[60px] font-bold leading-[60px]">
                    89%
                  </h1>
                  <div className="w-full flex justify-center">
                  <svg
                    fill="#ffffff"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 32 32"
                    xmlSpace="preserve"
                    stroke="#ffffff"
                    width="150"
                    height="180"
                    className='animate-spin'
                    style={{animationDuration: '2050ms'}}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <path d="M21.477,4.511c0,2.487-2.021,4.508-4.508,4.508c-2.49,0-4.509-2.021-4.509-4.508c0-2.49,2.02-4.511,4.509-4.511C19.458,0,21.477,2.021,21.477,4.511z M16.972,27.68c-1.386-0.002-2.513,1.119-2.517,2.508c-0.003,1.391,1.117,2.518,2.505,2.52c1.39,0.004,2.517-1.117,2.519-2.506C19.484,28.811,18.361,27.684,16.972,27.68z M31.451,17.352c0-0.906-0.734-1.641-1.641-1.641c-0.908,0-1.644,0.732-1.644,1.641c0,0.904,0.733,1.643,1.644,1.643C30.716,18.994,31.451,18.258,31.451,17.352z M6.995,17.352c0-1.585-1.284-2.87-2.87-2.87s-2.869,1.285-2.869,2.87c0,1.584,1.283,2.869,2.869,2.869S6.995,18.936,6.995,17.352z M26.962,7.354c-0.504-0.506-1.319-0.504-1.825,0c-0.505,0.506-0.505,1.328,0,1.832c0.506,0.506,1.321,0.506,1.825,0S27.466,7.86,26.962,7.354z M9.973,24.354c-1.152-1.146-3.019-1.146-4.17-0.002c-1.151,1.146-1.152,3.012,0,4.16c1.152,1.148,3.018,1.15,4.168,0C11.125,27.367,11.125,25.502,9.973,24.354z M27.251,27.631c0.658-0.662,0.658-1.734-0.002-2.396c-0.658-0.658-1.726-0.658-2.385,0.004c-0.658,0.66-0.658,1.732,0,2.395C25.525,28.293,26.591,28.293,27.251,27.631z M10.047,10.427c1.188-1.189,1.188-3.119,0-4.311c-1.188-1.189-3.115-1.189-4.305,0c-1.188,1.189-1.188,3.119,0.001,4.311S8.858,11.618,10.047,10.427z"></path>
                      </g>
                    </g>
                  </svg>
                  </div>
                  <p className="text-[16px] font-semibold">
                  Stay tuned as we prepare your secure and seamless digital experience with NEXA. Innovation and reliability are at the core of every transaction, and we’re committed to empowering you with the future of currency.
                  </p>
                </div>

          </div>


        </div>

        <div className="flex items-end relative bottom-[16%] px-[40px]">
          <CoolText size={'xl'} className={clsx('text-3xl font-bold')} data={title}  currentView={currentView} />
        </div>
      </div>
    </div>
  )
}

export default Hero;
