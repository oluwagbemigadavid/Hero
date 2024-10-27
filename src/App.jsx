import { MainLayout } from './layout';
import { ABOUT, HERO } from './components';
import { useNav } from './providers';
import { useEffect, useRef, useState } from 'react';
import { menuList } from './utils';

function App() {
  const [loading, setLoading] = useState(true);
  const [lastLoggedScroll, setLastLoggedScroll] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [scrollLock, setScrollLock] = useState(false);
  const { activeMenu, setActiveMenu, isFromNav,setIsFromNav, setNavSwitch } = useNav();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const index = menuList.findIndex(item => item.value === activeMenu.value);
    if (index !== -1) {
      setScrollIndex(index);
    }
  }, [activeMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollLock) return;

      const scrollPosition = window.scrollY;

      if (scrollPosition <= 10 && scrollIndex !== 0) {
        setLastLoggedScroll(scrollPosition);
        setScrollIndex(0);
        return; 
      }

      if (scrollPosition - lastLoggedScroll >= 500) {
        setLastLoggedScroll(scrollPosition);
        setScrollIndex((prevIndex) => prevIndex + 1);
      } else if (lastLoggedScroll - scrollPosition >= 500) {
        setLastLoggedScroll(scrollPosition);
        setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastLoggedScroll, scrollLock]);

  useEffect(() => {
    
    const handleScroll1 = () => {
      console.log(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll1);
    return () => {
      window.removeEventListener('scroll', handleScroll1);
    };
  
  }, [])
  

  useEffect(() => {

    setScrollLock(true);
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      setScrollLock(false);
      document.body.style.overflow = '';
    }, 5000);

    if (isFromNav) return;

    if(menuList[scrollIndex].name === activeMenu.name) return;
    
    if (scrollIndex >= 0 && scrollIndex < menuList.length) {
      setNavSwitch(true);
      setTimeout(() => {
        setActiveMenu(menuList[scrollIndex]);
      }, 1200);

    }
  }, [scrollIndex, isFromNav, setActiveMenu, setNavSwitch]);

  useEffect(() => {
    if (isFromNav) {
      const targetScrollPosition = scrollIndex * 500;
      console.log('im running', targetScrollPosition, scrollIndex)
      window.scrollTo({
        top: targetScrollPosition,
        behavior: 'smooth',
      });
      setLastLoggedScroll(targetScrollPosition)
    }
  }, [activeMenu, isFromNav, scrollIndex]);

  return (
    <div className='overflow-scroll w-screen h-[2400px] relative bg-blue-300'>
      <div className="fixed w-full z-[1010]">
        <MainLayout>
          <div className="w-full h-full hero relative z-[100]">
            {/* Render sections based on active menu */}
            {!loading && (
              activeMenu.value === 'home' ? <HERO /> :
              activeMenu.value === 'about' ? <ABOUT /> :
              null 
            )}
          </div>
        </MainLayout>
      </div>
    </div>
  );
}

export default App;
