import React, { useEffect, useRef, useState } from 'react'
import { CarModel, Experience, Nav, Register } from '../../components'
import { useNav } from '../../providers'
import clsx from 'clsx'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Leva, useControls } from 'leva'
import * as THREE from 'three';


import { ACESFilmicToneMapping, sRGBEncoding } from 'three';


const MainLayout = ({children}) => {

  const {activeMenu, request} = useNav()
  const cameraRef = useRef();
  const [isParallax, setIsParallax] = useState(false)
  const mousePosition = useRef({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const { x, y, z } = useControls({
    x: { value: 1, min: -12, max: 12, step: 0.0001 },
    y: { value: 2, min: -12, max: 12, step: 0.0001 },
    z: { value: 6, min: -12, max: 12, step: 0.0001 }
  })

  const DynamicCamera = () => {
    const { camera } = useThree()  
    const parallaxMultiplier = 1 

    useFrame(() => {
      if (cameraRef.current) {
        camera.position.x = x + mousePosition.current.x * parallaxMultiplier
        camera.position.y = y + mousePosition.current.y * parallaxMultiplier
        camera.position.z = z
        camera.lookAt(0, 0, 0)
      }
    })
    return null
  }



  return (
    <div className={clsx(
      'main realtive w-full h-screen transition duration-[1000ms]',
      {
       'bg-[#00000070]': request,
       'bg-[#00000000]': !request
      }
     )}>
      <div className= {clsx(
        "main-container pt-[24px] mx-[24px] relative w-full  flex gap-[48px]",
        {
         'main-request': request,
         'main-not-request': !request
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
                <path d="M 0 0 L 100 0 L 100 100 L 25 100 L 0 75 Z" fill="white" />
                <g fill="black">
                  <use transform="translate(-0.8 74.8) rotate(-68)" href="#main-corner" />
                  <use transform="translate(25 100.5) rotate(-113)" href="#main-corner" />
                </g>
              </mask>


              <radialGradient id="radial-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="47%" stopColor="rgba(19,126,57,1)" />
                <stop offset="97%" stopColor="rgba(8,65,91,1)" />
              </radialGradient>
            </defs>


            <rect width="100%" height="100%" mask="url(#hex)" fill="url(#radial-gradient)" rx="2"/>
          </svg>

        </div>
        <div className={clsx(
          "absolute top-0 left-0 w-full h-full pointer-events-none z-[1000] opacity-0 transition-opacity duration-[500ms] delay-[350ms]",
          { 'opacity-100  !pointer-events-auto ': request }
        )}> 
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
                <rect width="100%" height="100%" mask="url(#hex)" fill='#00000060' rx="2"/>
              </svg>
        </div>
          <Nav />
          <div className="w-full absolute h-screen top-[-24px] flex items-center z-100 justify-center overflow-hidden">
            <div className=" canvas w-[100%] h-[100%]">
              <Canvas
                flat
                gl={{
                  outputEncoding: sRGBEncoding,
                  toneMapping: ACESFilmicToneMapping,
                  toneMappingExposure: 1.0
                }}
                camera={ {
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [ x, y, z ]
                } }
                >
                <perspectiveCamera ref={cameraRef} />
                {isParallax && <DynamicCamera />}
                  <Experience />
                </Canvas>
                    {/* <Leva collapsed /> */}
            </div>
          </div>
          <div className={clsx("relative pt-[132px] pl-[200px] z-10 rounded-lg  overflow-hidden",
          {'pointer-events-none': activeMenu.value === 'features'})}>
            {children}
          </div>
       </div>
      </div>
    </div>
  )
}

export default MainLayout
