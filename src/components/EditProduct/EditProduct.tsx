"use client"
import Loader from '@/components/Loader/Loader';
import CustomizedSnackbars from '@/components/SuccessSnack/SuccessSnack';
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import useProductById from '@/hooks/useProductById';
import useUpdateProduct from '@/hooks/useUpdateProduct';


interface Product {
    name:string;
    image: string ;
    category: string;
    subcategory: string;
    price: number;
    discount: number;
    link: string;

}



const EditProduct = () => {
    const [product , setProduct] = useState <Product>({
        name: '',
        image: '',
        category: '',
        subcategory: '',
        price: 0,
        discount: 0,
        link: '',
    })
    const [open, setOpen] = React.useState(false);
    const [loading,setLoading] = useState<boolean>(false);
    const [result,setResult] = useState<'success' | 'error'>('success');
    
    
    const {data : productData} = useProductById()
    const updateProduct = useUpdateProduct();
    useEffect(()=>{
        productData ? setProduct({
            name: productData.name,
            image: productData.image,
            category: productData.category,
            subcategory: productData.subcategory,
            price: productData.price,
            discount: productData.discount,
            link: productData.link,
        }) : setProduct({
            name: '',
            image: '',
            category: '',
            subcategory: '',
            price: 0,
            discount: 0,
            link: '',
        })
    },[productData])
      
      
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        const {name,value} = e.target;
            setProduct((prevProduct)=>({
                ...prevProduct,[name]:value,
            }))
        
           
        
        }

        const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
            if (reason === 'clickaway') {
              return;
            }
            setOpen(false);
          };
          
         

          const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setLoading(true);
            try {
                await updateProduct.mutateAsync(product);
                setResult('success');
            } catch (error) {
                console.error('Error updating product:', error);
                setResult('error');
            } finally {
                setLoading(false);
                setOpen(true);
            }
        };  
  return (
    <div className="p-4">
    <div className='text-3xl text-white mb-4'>
   Edit Product
    </div>  
    <form onSubmit={handleUpdate} className='flex justify-center w-full' >
      <div className="flex flex-col mb-4">
      <label className="mb-1 font-bold  text-white">Name & Description</label>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder='Name & Description'
        className="py-2 px-3 w-[300px]  border rounded"
      />
     
      <label className="mt-3 font-bold  text-white">Image</label>
      <input
        type="text"
        name="image"
        value={product.image}
        onChange={handleChange}
        placeholder='Image'
        className="py-2 px-3 text-black mt-1  border rounded"
      />

<label className="mt-3 font-bold  text-white">Category</label>

        <select
        name="category"
        value={product.category}
        onChange={handleChange}
        className="py-2 px-3 mt-1 border rounded"
      >
        <option value="">Select a category</option>
        <option value="Clothing">Clothing</option>
        <option value="Accessories">Accessories</option>
        <option value="Electronics">Electronics</option>
      </select>
     
      {product.category === 'Clothing' && (

<div className="flex flex-col mb-4">
<label className="mb-1 font-bold mt-3 text-white">Subcategory</label>
<select
name="subcategory"
value={product.subcategory}
onChange={handleChange}
className="py-2 px-3  border rounded"
>
<option value="">Select a subcategory</option>
<option value="Men">Men</option>
<option value="Women">Women</option>
</select>

</div>
      )}
     <label className="mb-1 font-bold mt-3 text-white">Price</label> 
       <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder='Price'
        className="py-2 px-3  border rounded"
      />
      
      <label className="mb-1 font-bold mt-3 text-white">Discount</label> 
        <input
        type="number"
        name="discount"  
        value={product.discount}
        onChange={handleChange}  
        placeholder='Discount'
        className="py-2 px-3  border rounded"
        />

      <label className="mb-1 font-bold mt-3 text-white">Link</label> 
       <input
        type="text"
        name="link"   
        value={product.link}
        onChange={handleChange} 
        placeholder='Link'
        className="py-2 px-3  border rounded"
      />
      
  {loading ?
   <button disabled={loading} type="submit" className="py-2 px-4 mt-5 h-[50px]  bg-black text-white rounded relative"><Loader /></button> 
   :
   <button disabled={loading} type="submit" className="py-2 px-4 mt-5  bg-yellow-500 text-white rounded relative">Update Product </button> 
  }
      
      
    </div>
    </form>
   <CustomizedSnackbars show={open} onClose={handleClose} success={result} />
</div>
  )
}

export default EditProduct