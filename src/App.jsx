import { MainLayout } from './layout';
import { ABOUT, HERO } from './components';
import { useNav } from './providers';
import { useEffect, useState } from 'react';
import { menuList } from './utils';

function App() {
  const [loading, setLoading] = useState(true);
  const [lastLoggedScroll, setLastLoggedScroll] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0); // Tracks 500px increments
  const [scrollLock, setScrollLock] = useState(false); // New scroll lock state
  const { activeMenu, setActiveMenu, isFromNav, setNavSwitch } = useNav();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollLock) return; // Prevent scroll if locked

      const scrollPosition = window.scrollY;

      if (scrollPosition - lastLoggedScroll >= 500) {
        // Scrolled down another 500px
        setLastLoggedScroll(scrollPosition);
        setScrollIndex((prevIndex) => prevIndex + 1);
      } else if (lastLoggedScroll - scrollPosition >= 500) {
        // Scrolled up another 500px
        setLastLoggedScroll(scrollPosition);
        setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Prevent negative index
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastLoggedScroll, scrollLock]);

  useEffect(() => {
    if (scrollIndex >= 0 && scrollIndex < menuList.length) {
      setNavSwitch(true);
      setTimeout(() => {
        setActiveMenu(menuList[scrollIndex]);
      }, 1200);

      // Enable scroll lock
      setScrollLock(true);
      document.body.style.overflow = 'hidden';

      // Disable scroll lock after 2 seconds
      setTimeout(() => {
        setScrollLock(false);
        document.body.style.overflow = '';
      }, 5000);
    }
  }, [scrollIndex, setActiveMenu, setNavSwitch]);

  useEffect(() => {
    console.log(isFromNav)
   
  }, [activeMenu])
  

  return (
    <div className='overflow-scroll w-screen min-h-[300vh] relative bg-blue-300'>
      <div className="fixed w-full z-[1010]">
        <MainLayout>
          <div className="w-full h-full hero relative z-[100]">
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
