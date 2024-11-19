import { createContext, useContext, useState } from "react";


const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [params, setParams] = useState({
    scale: 1,
    position: {
      x: 0.002,
      y: 0.002,
      z: 0.002
    },
    rotation: {
      x: Math.PI / 2,
      y: 0.002,
      z: 2.002
    },
  })
  const [feature, setFeature] = useState('none')

  return(
    <CarContext.Provider value={{
      params, 
      setParams,
      feature,
      setFeature,
    }}>
      {children}
    </CarContext.Provider>
  )
}

const useCar = () => {
  return useContext(CarContext)
}

export {CarProvider, useCar}