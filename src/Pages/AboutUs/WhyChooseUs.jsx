import React from 'react'

const WhyChooseUs = ({arrayOnWhyChooseUs}) => {
  return (
      
      <div className='w-full flex  justify-center'>
          <div className=' w-4/5 flex-col flex '>

    <div className='w-full'> 
<p className=' text-2xl text-gray-800 font-semibold'>Why Choose Us</p></div>
<div className='w-full border-b border-gray-300 mt-3'></div>


<div className='mt-7 mb-10 full flex justify-between '>
{arrayOnWhyChooseUs?.map((items)=>(<div className='w-96  py-5 px-5 '>
<img className='w-16 text-gray-800 ' src={items.image} alt="" />
<div className='text-gray-800 mt-3 mb-3 text-xl font-semibold'>{items?.head}</div>
<div className='text-gray-800 text-sm'>{items?.paragraph}</div>
</div>))}

{/* <div className='w-96 bg-blue-100 '>
            <img className='w-20' src={`https://codervent.com/shopingo/demo/assets/images/icons/delivery.png`} alt="" />
            <p>FREE SHIPPING</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr in some form.</p>
        </div>
        <div className='w-96 bg-blue-600'>
            <img className='w-20' src={`https://codervent.com/shopingo/demo/assets/images/icons/money-bag.png`} alt="" />
            <p>100% MONEY BACK GUARANTEE</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr in some form.</p>
        </div>
        <div className='w-96 bg-blue-900 px-5'>
            <img className='w-20' src={`https://codervent.com/shopingo/demo/assets/images/icons/support.png`} alt="" />
            <p>ONLINE SUPPORT 24/7</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr in some form.</p>
            
            </div> */}
</div>


    </div>
    </div>
  )
}

export default WhyChooseUs;