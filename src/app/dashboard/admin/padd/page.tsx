import Link from 'next/link'
import React from 'react'

const Admin = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex mt-5 text-cyan-50 text-4xl w-full  justify-center'>Admin</div>
       
       <div className='flex justify-center flex-wrap gap-10'>
         <Link href='/dashboard/admin/productlist'>
        <div style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)' }}  className="mt-5 text-cyan-50 text-2xl  w-[300px] h-[300px] rounded-full shadow-xl flex items-center justify-center transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer">
           Products
         </div>
         </Link>
         <Link href='/dashboard/admin/addproduct'>
             
         <div style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)' }} className="mt-5 text-cyan-50 text-2xl  w-[300px] h-[300px] rounded-full shadow-xl flex items-center justify-center transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer">
         Add  Products
         </div>
          </Link>
       </div>
    </div>
  )
}

export default Admin