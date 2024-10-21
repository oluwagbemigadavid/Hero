import { MainLayout } from './layout';
import { ABOUT, HERO } from './components';
import { useNav } from './providers';
import { useEffect, useState } from 'react';

function App() {
  const { activeMenu } = useNav();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>
      <div className="w-full h-full hero relative">
        {!loading && (
          activeMenu.value === 'home' ? <HERO /> : 
          activeMenu.value === 'about' ? <ABOUT /> : 
          null 
        )}
      </div>
    </MainLayout>
  );
}

export default App;
