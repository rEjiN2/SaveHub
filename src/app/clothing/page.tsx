import React from 'react'
import Banner from '../../../public/clothbanner.webp'
import Image from 'next/image'
import Cloth from '../../../public/clothing.jpg'
import Accessories from '../../../public/access.jpg'
import Elecgtronics from '../../../public/electronics.jpg'
import Tshirt from '../../../public/tshirt.jpg'
import HeadSet from '../../../public/headset.jpg'
import Cycle from '../../../public/cycle.webp'
import Trimmer from '../../../public/trimmer.webp'
import Top from '../../../public/top.webp'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
const Clothing = () => {
    const items = [
        { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
        { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
        { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
      ]
  return (
    <div className='pt-10'>
        <Image src={Banner} alt='banner' width={1440} style={{borderRadius:'20px'}} />

      
        <section className="pt-10">
        <h1 className="text-zinc-50 text-5xl text-center underline pt-10">Mens</h1>
        <div className="container mx-auto pt-10">
          <div className="grid gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white  rounded-lg shadow-lg h-[350px] relative">
          <div className="flex justify-between">
        <div className="price-tag z-50">₹ 220.00 </div>
        <div className="price-tag z-50">50% Off </div>
        </div>
    <Image src={Cloth} alt="clothing" objectFit="cover" layout="fill" className="rounded-lg" />
    <div className="absolute bottom-0 w-full flex items-center justify-center">
        <h1 className="text-[#058] text-xl text-center bg-[#ffea00]  p-3 rounded cursor-pointer">Buy Now</h1>
    </div>
</div>
<div className="bg-white  rounded-lg shadow-lg h-[350px] relative">
<div className="flex justify-between">
        <div className="price-tag z-50">₹ 220.00 </div>
        <div className="price-tag z-50">50% Off </div>
        </div>
    <Image src={Accessories} alt="clothing" objectFit="cover" layout="fill" className="rounded-lg" />
    <div className="absolute bottom-0 w-full flex items-center justify-center">
        <h1 className="text-[#058] text-xl text-center bg-[#ffea00]  p-3 rounded cursor-pointer">Buy Now</h1>
    </div>
</div>
<div className="bg-white  rounded-lg shadow-lg h-[350px] relative">
<div className="flex justify-between">
        <div className="price-tag z-50">₹ 220.00 </div>
        <div className="price-tag z-50">50% Off </div>
        </div>
    <Image src={Elecgtronics} alt="clothing" objectFit="cover" layout="fill" className="rounded-lg" />
    <div className="absolute bottom-0 w-full flex items-center justify-center">
        <h1 className="text-[#058] text-xl text-center bg-[#ffea00]  p-3 rounded cursor-pointer">Buy Now</h1>
    </div>
</div>
<div className="bg-white  rounded-lg shadow-lg h-[350px] relative">
<div className="flex justify-between">
        <div className="price-tag z-50">₹ 220.00 </div>
        <div className="price-tag z-50">50% Off </div>
        </div>
    <Image src={Tshirt} alt="clothing" objectFit="cover" layout="fill" className="rounded-lg" />
    <div className="absolute bottom-0 w-full flex items-center justify-center">
        <h1 className="text-[#058] text-xl text-center bg-[#ffea00]  p-3 rounded cursor-pointer">Buy Now</h1>
    </div>
</div>
<div className="bg-white  rounded-lg shadow-lg h-[350px] relative">
<div className="flex justify-between">
        <div className="price-tag z-50">₹ 220.00 </div>
        <div className="price-tag z-50">50% Off </div>
        </div>
    <Image src={Cloth} alt="clothing" objectFit="cover" layout="fill" className="rounded-lg" />
    <div className="absolute bottom-0 w-full flex items-center justify-center">
        <h1 className="text-[#058] text-xl text-center bg-[#ffea00]  p-3 rounded cursor-pointer">Buy Now</h1>
    </div>
</div>
<div className="bg-white  rounded-lg shadow-lg h-[350px] relative">
<div className="flex justify-between">
        <div className="price-tag z-50">₹ 220.00 </div>
        <div className="price-tag z-50">50% Off </div>
        </div>
    <Image src={Accessories} alt="clothing" objectFit="cover" layout="fill" className="rounded-lg" />
    <div className="absolute bottom-0 w-full flex items-center justify-center">
        <h1 className="text-[#058] text-xl text-center bg-[#ffea00]  p-3 rounded cursor-pointer">Buy Now</h1>
    </div>
</div>
<div className="bg-white  rounded-lg shadow-lg h-[350px] relative">
<div className="flex justify-between">
        <div className="price-tag z-50">₹ 220.00 </div>
        <div className="price-tag z-50">50% Off </div>
        </div>
    <Image src={Elecgtronics} alt="clothing" objectFit="cover" layout="fill" className="rounded-lg" />
    <div className="absolute bottom-0 w-full flex items-center justify-center">
        <h1 className="text-[#058] text-xl text-center bg-[#ffea00]  p-2 rounded cursor-pointer">Buy Now</h1>
    </div>
</div>
<div className="bg-white  rounded-lg shadow-lg h-[350px] relative">
<div className="flex justify-between">
        <div className="price-tag z-50">₹ 220.00 </div>
        <div className="price-tag z-50">50% Off </div>
        </div>
    <Image src={Tshirt} alt="clothing" objectFit="cover" layout="fill" className="rounded-lg" />
    <div className="absolute bottom-0 w-full flex items-center justify-center">
    <h1 className="text-[#058] text-xl text-center bg-[#ffea00]  p-2 rounded cursor-pointer">Buy Now</h1>
    </div>
</div>
           
          </div>
                
        </div>
        </section>


        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-10">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
        
    </div>
  )
}

export default Clothing