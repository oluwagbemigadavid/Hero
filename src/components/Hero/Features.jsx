import React from 'react'
import { useCar } from '../../providers'

const Features = () => {

    const { setFeature } = useCar()
  return (
    <div className="h-full w-ful  flex justify-end px-[40px]">
        <ul>
            <li>Bonet</li>
            <li>Driver Door</li>
            <li>Passanger Door</li>
            <li>Engine</li>
            <li>Boot</li>
            <li>Dashboard</li>
        </ul>
    </div>
  )
}

export default Features