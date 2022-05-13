import React from 'react'

const TopBar = () => {
  return (
    <div className='w-full'> <div className=" bg-gray-100 py-3 border-y border-gray-300 w-full">
    <div className="flex  mx-40 w-4/5 justify-between items-center">
      <div className="mr-40 text-3xl font-semibold text-gray-900">
        Contact Info
      </div>
      <div className="flex w-40 justify-evenly ">
        <div className="">Home</div>
        <div className="text-xl">
          <i class="fa-solid fa-angle-right"></i>
        </div>
        <div className="text-gray-500">Contact</div>
      </div>
    </div>
  </div></div>
  )
}

export default TopBar;