 
import React, { useEffect, useRef, useState } from 'react'
import CustomSquare from '../Custom-square'
import { useNav } from '../../providers';
import clsx from 'clsx';

const Header = ({menu}) => {
  const menuRefs = useRef(menu.map(() => React.createRef()));
  const [menuWidths, setMenuWidths] = useState([]);
  const [currentMenuWidth, setCurrentMenuWidth] = useState({})
  const {activeMenu, setActiveMenu, setNavSwitch, setIsFromNav, request, setRequest} = useNav()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const widths = menuRefs.current.map(ref => ({
      name: ref.current.textContent,
      width: ref.current.offsetWidth,
      left: ref.current.offsetLeft
    }));
    setMenuWidths(widths);
    
  }, [menu]);
  
  useEffect(() => {
    if(!menuWidths) return;
    setCurrentMenuWidth(menuWidths[0])
  }, [menuWidths])
  
  const handleMenuClick = (val) => {
    if(loading) return
    if(val.value === activeMenu.value) return
    setLoading(true)
    setNavSwitch(true)
    setIsFromNav(true)
    let active = menuWidths.find(item => item.name === val.name)
    setCurrentMenuWidth(active)
    
    
    setTimeout(() => {
      setActiveMenu(val);
    }, 1200);
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }

  const handleRequest = () => {
    setRequest(true)
    console.log(request)
  }

  return (
    <div className='header relative flex justify-between items-center w-full h-[100px] px-[40px] my-[16px] overflow-hidden '>
      <div className="h-[50px] overflow-hidden cursor-pointer">
        <h1 className="text-4xl font-bold logo">
          ABCD
        </h1>
      </div>

      <CustomSquare className={clsx('menu w-fit gap-10 h-[84px] p-[24px] relative')} gap='gap-[24px]'>
        <CustomSquare 
          className={'pointer-events-none !duration-[1750ms] gap-10 px-[40px] w-[130px] !absolute'} 
          style={{
            width: `${currentMenuWidth?.width}px`,
            left: `${currentMenuWidth?.left}px`,
          }}
        />
        {menu.map((item, idx) => (
          
          <CustomSquare 
            className={clsx('text-center w-fit px-[40px]')} 
            nav 
            style={{ 
              cursor: loading ? 'progress' : 'pointer' ,
            }}
            refProp={menuRefs.current[idx]} 
            key={idx} 
            onClick={() => handleMenuClick(item)}
          >
            <p className="text-center font-semibold">{item.name}</p>
          </CustomSquare>
        ))}
      </CustomSquare>

      <CustomSquare className={'request-btn flex text-black items-center'}  onClick={handleRequest} gap='gap-[24px]'>
        <p className="text-center font-semibold">Request</p>
        <p className="text-center text-xl font-heavy">&rarr;</p>
      </CustomSquare>
    </div>
  )
}

export default Header