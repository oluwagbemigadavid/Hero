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

  //This block is causing problems.

  useEffect(() => {

    setScrollLock(true);
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      setScrollLock(false);
      setIsFromNav(false)
      document.body.style.overflow = '';
    }, 5000);

    console.log(
      isFromNav, 'app.tsx'
    )
    if (isFromNav) return;
    
    if(menuList[scrollIndex].name === activeMenu.name) return;
    
    console.log('i should not be running')
    
    if (scrollIndex >= 0 && scrollIndex < menuList.length) {
      setNavSwitch(true);
      setActiveMenu(menuList[scrollIndex]);

    }
  }, [scrollIndex, isFromNav, setActiveMenu, setNavSwitch]);

  useEffect(() => {
    console.log('im running')
    if (isFromNav) {
      const targetScrollPosition = scrollIndex * 500; // Calculate target scroll position
      window.scrollTo({
        top: targetScrollPosition,
        behavior: 'smooth',
      });
    }
  }, [activeMenu, isFromNav, scrollIndex]);

  return (
    <div className='overflow-scroll w-screen min-h-[300vh] relative bg-blue-300'>
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
