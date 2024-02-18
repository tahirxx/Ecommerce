
export default function Hero() {
  return (
    <div className='flex flex-row w-full mt-4'>
      <div className='w-1/2 h-full overflow-hidden mr-2 relative'>
        <div className='relative w-full'>
            <img className='w-full' src="https://images.pexels.com/photos/7691089/pexels-photo-7691089.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className='absolute top-0 left-14 bottom-0 flex flex-col justify-center w-[75%]'>
                <span className='text-4xl font-thin whitespace-nowrap text-black font-[lobster] mb-4'>
                    Womens Fashion 
                </span>
                <p className='text-[#404057] font-300 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p 
                href="#"
                className='block py-2 text-black font-semibold lg:p-0 uppercase border-b-2 border-[#7d0d0d] w-[5.5rem] pb-1'>
                    SHOP NOW
                </p>
            </div>
        </div>
       </div>
       <div className='w-1/4 flex flex-col mb-2 mrml-2 '>
      <div className='relative w-full'>
            <img className='w-full' src="https://images.pexels.com/photos/9775856/pexels-photo-9775856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className='absolute top-0 left-6 bottom-0 flex flex-col justify-center w-[75%]'>
                <span className='text-[1.5rem] font-semibold whitespace-nowrap text-black'>
                    Mens Fashion 
                </span>
                <p className='text-[#404057] font-300 mb-4'>
                358 items
                </p>
                <p className='block py-2 text-black font-semibold lg:p-0 uppercase border-b-2 border-[#7d0d0d] w-[5.5rem]'>
                    SHOP NOW
                </p>
            </div>
        </div>
        <div className='h-1/2 mt-2 overflow-hidden'>
        <div className='relative w-full'>
            <img className='w-full' src="https://images.pexels.com/photos/5559998/pexels-photo-5559998.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className='absolute top-0 left-6 bottom-0 flex flex-col justify-center w-[75%]'>
                <span className='text-[1.5rem] font-semibold whitespace-nowrap text-black'>
                    Kids Fashion 
                </span>
                <p className='text-[#404057] font-300 mb-4'>
                273 items
                </p>
                <p className='block py-2 text-black font-semibold lg:p-0 uppercase border-b-2 border-[#7d0d0d] w-[5.5rem] pb-1'>
                    SHOP NOW
                </p>
            </div>
        </div>
        </div>
      </div>
      <div className='w-1/4 flex flex-col ml-2 '>
      <div className='relative w-full'>
            <img className='w-full' src="https://images.unsplash.com/photo-1625094640367-05f84293fe42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNvc21ldGljfGVufDB8MHwwfHx8MA%3D%3D" alt="" />
            <div className='absolute top-0 left-6 bottom-0 flex flex-col justify-center w-[75%]'>
                <span className='text-[1.5rem] font-semibold whitespace-nowrap text-black'>
                    Cosmetics 
                </span>
                <p className='text-[#404057] font-300 mb-4'>
                159 items
                </p>
                <p className='block py-2 text-black font-semibold lg:p-0 uppercase border-b-2 border-[#7d0d0d] w-[5.5rem]'>
                    SHOP NOW
                </p>
            </div>
        </div>
        <div className='h-1/2 mt-2'>
        <div className='relative w-full'>
            <img className='w-full' src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVyc2V8ZW58MHx8MHx8fDA%3D" alt="" />
            <div className='absolute top-0 left-6 bottom-0 flex flex-col justify-center w-[75%]'>
                <span className='text-[1.5rem] font-semibold whitespace-nowrap text-black'>
                    Accessories 
                </span>
                <p className='text-[#404057] font-300 mb-4'>
                792 items
                </p>
                <p className='block py-2 text-black font-semibold lg:p-0 uppercase border-b-2 border-[#7d0d0d] w-[5.5rem] pb-1'>
                    SHOP NOW
                </p>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
