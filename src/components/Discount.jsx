import React from 'react'

export default function Discount() {
  return (
    <div className='flex flex-row w-full mt-4 justify-center relative left-0 mb-6'>
      <div className='flex justify-center'>
        <div className='flex-1 flex-col ml-2 w-[30rem] h-[20rem]'>
            <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGNsb3RoJTIwbW9kZWx8ZW58MHwwfDB8fHww" alt="" />
        </div>
        <div className='flex-1 flex flex-col ml-2'>
            <div className='h-[18rem] block max-w-sm p-6 bg-white dark-bg-[#f4f4f4] relative'>
                <div className='relative top-[0rem] left-1/2 transform -translate-x-1/2 w-40 h-40 bg-white rounded-full flex items-center overflow-visible z-0'>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-sm font-semibold dark-text-[#000]'>DISCOUNT</span>
                        <h2 className='text-2xl font-400 font-[Lobster] dark:text-[#ca1515]'>Summer 2019</h2>
                        <span className='text-sm font-semibold dark:text-[#000]'>SALE</span>
                        <span className='text-lg font-semibold dark:text-[#ca1515]'>50%</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row '>
                <div className='mr-4'>
                    <span className='text-[2rem] font-medium dark:text-[#000] pr-2'>30</span>
                    <span className='text-[1rem] font-200 dark:text-[#000] pr-4'>Day</span>
                </div>
                <div className='mr-4'>
                    <span className='text-[2rem] font-medium dark:text-[#000] pr-2'>06</span>
                    <span className='text-[1rem] font-200 dark:text-[#000] pr-4'>Hour</span>
                </div>
                <div className='mr-4'>
                    <span className='text-[2rem] font-medium dark:text-[#000] pr-2'>54</span>
                    <span className='text-[1rem] font-200 dark:text-[#000] pr-4'>Min</span>
                </div>
                <div className='mr-4'>
                    <span className='text-[2rem] font-medium dark:text-[#000] pr-2'>45</span>
                    <span className='text-[1rem] font-200 dark:text-[#000] pr-4'>Second</span>
                </div>
            </div>
        </div>
        <div className='justify-center text-[0.6rem] items-center mt-3 m-auto flex py-2 text-black font-bold lg:p-0 uppercase border-b-2 border-[ca1515] w-[3.5rem]'></div>
        <div className='flex-1 flex-row w-full mt-4 justify-center mb-6 relative left-0'>
            <div className='mr-6 flex'></div>
            <div className='mr-6 flex'></div>
            <div className='mr-6 flex'></div>
            <div className='mr-6 flex'></div>
        </div>
      </div>
    </div>
  )
}
