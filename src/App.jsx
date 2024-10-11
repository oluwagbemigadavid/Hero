import { MainLayout } from './layout'
import { ABOUT, HERO } from './components'
import { useNav } from './providers'
import { useEffect, useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  const {activeMenu } = useNav()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 750);
  }, [])
  

  return (
    <MainLayout>
      <div className="w-full h-full hero">
        {/* <Login /> */}
       {!loading && (activeMenu.value === 'home' ?  <HERO /> :activeMenu.value === 'about' ?  <ABOUT /> : <></>)} 
      </div>
    </MainLayout>
  )
}

export default App
