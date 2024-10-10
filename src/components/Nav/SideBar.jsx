import React from 'react'

const SideBar = ({activeNav}) => {
  return (
    <div className='my-[80px]'>
      <div className="px-[40px]">
        <h1 className='text-3xl font-bold max-w-[150px]'>{activeNav.name}</h1>
      </div>
    </div>
  )
}

export default SideBar
