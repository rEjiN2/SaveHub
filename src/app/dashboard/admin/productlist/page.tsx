"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import useProducts from '@/hooks/useProducts';
import { useRouter } from 'next/navigation';
import useDeleteProduct from '@/hooks/useDeleteProduct';


interface Product {
    id:number;
    name:string;
    image: string;
    category:string;
    subcategory:string;
    price:number;
    discount:number;
    link:string;
}


const ProductList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const router = useRouter()
  const itemsPerPage = 10;
  const deleteProductMutation = useDeleteProduct();

  const { data: products, isLoading, error } = useProducts();
  console.log(products,'pro');
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;
  if (!products) return <div>No products available</div>;

  // Calculate the indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the products for the current page
  const currentProducts = products.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleDelete = (id: number) => {
    deleteProductMutation.mutate(String(id));
  };

  return (
    <div className="p-4">
    <div className='flex items-center justify-between mb-2'>
      <h1 className="text-2xl text-white font-bold mb-4">Product List</h1>
     <Link href='/dashboard/admin/addproduct'>
      <button className="mr-2 bg-indigo-700 text-white py-1 px-5 rounded">Add Product</button>
     </Link>

    </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
            <th className="py-2 px-4 border-b text-left">Sl No</th>
              <th className="py-2 px-4 border-b text-left">Name</th>
              
              <th className="py-2 px-4 border-b text-left">Image</th>
              <th className="py-2 px-4 border-b text-left">Category</th>
              <th className="py-2 px-4 border-b text-left">Subcategory</th>
              <th className="py-2 px-4 border-b text-left">Price</th>
              <th className="py-2 px-4 border-b text-left">Discount</th>
              <th className="py-2 px-4 border-b text-left">Link</th>
              <th className="py-2 px-4 border-b text-left">Options</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product: Product, index:number) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">{startIndex + index + 1}</td>
                <td className="py-2 px-4 border-b w-[250px]">{product.name}</td>
              
                <td className="py-2 px-4 border-b">
                  <img src={product.image} alt={product.name} className="w-12 h-12" />
                </td>
                <td className="py-2 px-4 border-b">{product.category}</td>
                <td className="py-2 px-4 border-b">{product.subcategory}</td>
                <td className="py-2 px-4 border-b">₹ {product.price}</td>
                <td className="py-2 px-4 border-b">{product.discount}%</td>
                <td className="py-2 px-4 border-b">
                  <a href={product.link} className="text-blue-500">View</a>
                </td>
                <td className="py-2 px-4 border-b">
                     
                  <button onClick={()=>router.push(`/dashboard/admin/editProduct/${product.id}`)} className="mr-2 mb-1 bg-blue-500 text-white py-1 px-2 rounded">Edit</button>
                      

                  <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <button
          className="px-4 py-2 bg-gray-200 rounded"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className='text-white'>Page {currentPage} of {totalPages}</span>
        <button
          className="px-4 py-2 bg-gray-200 rounded"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
