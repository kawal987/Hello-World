import React from 'react'

const OurTopBrands = ({arrayOnTopBrands}) => {
  return (
    <div className='w-full flex  justify-center'>
    <div className=' w-4/5 flex-col flex '>
<div><p className='text-2xl text-gray-800 font-semibold'>Our Top Brands</p>
<div  className='border-b border-gray-300 mt-3'></div>
</div>
<div  style={{display:'grid', gridTemplateColumns:'auto auto auto auto auto', columnGap:'23px',rowGap:'23px',marginTop:'25px',marginBottom:'25px'}}>
{arrayOnTopBrands?.map((item)=>(<div className='' >
  <img className='border pt-4 border-gray-200 rounded pb-4 pr-3 pl-3'  src={item} alt="" />
</div>))}</div>
      </div>
      
      </div>
  )
}

export default OurTopBrands;