"use client"
import React, { useState } from 'react'
import Banner from '../../../../public/clothbanner.webp'
import Image from 'next/image'
import Cloth from '../../../../public/clothing.jpg'
import Accessories from '../../../../public/access.jpg'
import Elecgtronics from '../../../../public/electronics.jpg'
import Tshirt from '../../../../public/tshirt.jpg'
import HeadSet from '../../../../public/headset.jpg'
import Cycle from '../../../../public/cycle.webp'
import Trimmer from '../../../../public/trimmer.webp'
import Top from '../../../../public/top.webp'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import useWomenProducts from '@/hooks/useWomenProduct'
import Link from 'next/link'


interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  subcategory: string;
  price: number;
  discount: number;
  link: string;
}

const PAGE_SIZE = 8;


const Clothing = () => {
  const { data: products, isLoading, error } = useWomenProducts();
  const [currentPage, setCurrentPage] = useState<number>(1);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;
  if (!products || products.length === 0) return <div>No products available for Women</div>;

  const indexOfLastProduct = currentPage * PAGE_SIZE;
  const indexOfFirstProduct = indexOfLastProduct - PAGE_SIZE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  return (
    <div className='pt-10'>
        <Image src={Banner} alt='banner' width={1440} style={{borderRadius:'20px'}} />

      
        <section className="pt-10">
        <h1 className="text-zinc-50 text-5xl text-center underline pt-10">Women</h1>
        <div className="container mx-auto pt-10">
          <div className="grid gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          
         {currentProducts.map((product:Product)=>(
 <div key={product.id} className="bg-white  rounded-lg shadow-lg h-[350px] relative">
 <div className="flex justify-between">
<div className="price-tag z-50">₹ {product.price}.00 </div>
<div className="price-tag z-50">{product.discount}% Off </div>
</div>
<Image src={product.image} alt="clothing" objectFit="cover" layout="fill" className="rounded-lg" />
<div className="absolute bottom-0 w-full flex items-center justify-center">
<Link href={product.link}>
<h1 className="text-[#058] text-xl text-center bg-[#ffea00]  p-3 rounded cursor-pointer">Buy Now</h1>
</Link>

</div>
</div>
         ))}            
          </div>       
        </div>
        </section>


        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-10">
        <div className="flex flex-1 justify-between sm:hidden">
          <button onClick={prevPage} disabled={currentPage === 1} className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button onClick={nextPage} disabled={indexOfLastProduct >= products.length} className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{indexOfFirstProduct + 1}</span> to <span className="font-medium">{Math.min(indexOfLastProduct, products.length)}</span> of{' '}
              <span className="font-medium">{products.length}</span> results
            </p>
          </div>
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <button onClick={prevPage} disabled={currentPage === 1} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {[...Array(Math.ceil(products.length / PAGE_SIZE))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === index + 1 ? 'bg-indigo-600 text-white' : 'text-gray-900'} ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                >
                  {index + 1}
                </button>
              ))}
              <button onClick={nextPage} disabled={indexOfLastProduct >= products.length} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clothing