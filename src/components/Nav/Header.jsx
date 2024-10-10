/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'
import CustomSquare from '../Custom-square'
import { useNav } from '../../providers';

const Header = ({menu}) => {
  const menuRefs = useRef(menu.map(() => React.createRef()));
  const [menuWidths, setMenuWidths] = useState([]);
  const [currentMenuWidth, setCurrentMenuWidth] = useState({})
  const {activeMenu, setActiveMenu} = useNav()

  useEffect(() => {
    const widths = menuRefs.current.map(ref => ({
      name: ref.current.textContent,
      width: ref.current.offsetWidth,
      left: ref.current.offsetLeft
    }));
    setMenuWidths(widths);
    
    console.log(widths)
  }, [menu]);
  
  useEffect(() => {
    if(!menuWidths) return;
    setCurrentMenuWidth(menuWidths[0])
  }, [menuWidths])
  
  const handleMenuClick = (val) => {
    setActiveMenu(val);
    let active = menuWidths.find(item => item.name === val.name)
    setCurrentMenuWidth(active)
  }

  return (
    <div className='flex justify-between items-center w-full min-h-[100px] px-[40px] py-[16px] '>
      <div className="text-4xl font-bold">
        ABCD
      </div>

      <CustomSquare className={'w-fit gap-10 h-[84px] p-[24px] relative'} gap='gap-[24px]'>
        <CustomSquare 
          className={'pointer-events-none gap-10 px-[40px] w-[130px] !absolute'} 
          style={{
            width: `${currentMenuWidth?.width}px`,
            left: `${currentMenuWidth?.left}px`,
          }}
        />
        {menu.map((item, idx) => (
          
          <CustomSquare 
            className={'text-center w-fit px-[40px] '} 
            nav 
            refProp={menuRefs.current[idx]} 
            key={idx} 
            onClick={() => handleMenuClick(item)}
          >
            <p className="text-center font-semibold">{item.name}</p>
          </CustomSquare>
        ))}
      </CustomSquare>

      <CustomSquare className={'flex items-center gap-[40px]'}>
        tab1
      </CustomSquare>
    </div>
  )
}

export default Header