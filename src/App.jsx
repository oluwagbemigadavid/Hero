import { useState } from 'react'
import { MainLayout } from './layout'
import { HERO } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <div className="">
        {/* <Login /> */}
        <HERO />
      </div>
    </MainLayout>
  )
}

export default App
