import React from 'react'
// import ''
const Header = () => {
  return (
    <div className='bg-[#FFB902] px-10  flex items-center justify-between' >

      <h1 className=' logo text-2xl h-[110px] w-[110px]' ></h1>
      <div className='flex uppercase gap-10 text-2xl ' >
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Package</h1>
        <h1>Gallery</h1>
        <h1>Contact </h1>
      </div>
    </div>
  )
}

export default Header
