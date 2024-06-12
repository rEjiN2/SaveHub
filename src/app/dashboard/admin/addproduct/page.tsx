"use client"
import Loader from '@/components/Loader/Loader';
import CustomizedSnackbars from '@/components/SuccessSnack/SuccessSnack';
import React, { useState } from 'react';
import { useMutation } from 'react-query';


interface Product {
    name:string;
    image: string ;
    category: string;
    subcategory: string;
    price: number;
    discount: number;
    link: string;

}


interface ValidationErrors{
  name?: string;
  image?: string;
  category?: string;
  subcategory?: string;
  price?: string;
  discount?: string;
  link?: string;
}



const AddProduct = () => {

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
const [result,setResult] = useState<'success' | 'error'>('success')
const [errors,setErrors]=useState<ValidationErrors>({})


const validateProduct = (product:Product): ValidationErrors => {
  const errors:ValidationErrors = {}
  if (!product.name) errors.name = 'Name is required';
        if (!product.image) errors.image = 'Image URL is required';
        if (!product.category) errors.category = 'Category is required';
        if (product.category === 'Clothing' && !product.subcategory) errors.subcategory = 'Subcategory is required';
        if (product.price <= 0) errors.price = 'Price must be greater than zero';
        if (product.discount < 0) errors.discount = 'Discount cannot be negative';
        if (!product.link) errors.link = 'Link is required';

        return errors;
}

const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
const {name,value} = e.target;

    setProduct((prevProduct)=>({
        ...prevProduct,[name]:value,
    }))

    setErrors((prevErrors) => ({
      ...prevErrors, [name]: '',
  }));

}

const addProduct = async (product: Product) => {
    setLoading(true)
  const formData = new FormData();
  formData.append('name', product.name);
  formData.append('image', product.image);
  formData.append('category', product.category);
  formData.append('subcategory', product.subcategory);
  formData.append('price', product.price.toString());
  formData.append('discount', product.discount.toString());
  formData.append('link', product.link);

  const response = await fetch('/api/proadadmin', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to add product');
    setLoading(false)
    setResult('error')
  }

  return response.json();
};

const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};

const mutation = useMutation(addProduct, {
  onSuccess: () => {
    console.log('Product added successfully');
     setLoading(false)
     setOpen(true);
     setProduct({
      name: '',
      image: '',
      category: '',
      subcategory: '',
      price: 0,
      discount: 0,
      link: '',
  });
   
  },
  onError: (error) => {
    console.error('Error adding product:', error);
    setLoading(false)
    setResult('error')
  },
});


const handleSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const validationErrors = validateProduct(product);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
  }
    console.log('Product data:', product);
    mutation.mutate(product);
}

  return (
    <div className="p-4">
        <div className='text-3xl text-white mb-4'>
        AddProduct
        </div>  
        <form onSubmit={handleSubmit} className='flex justify-center w-full' >
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
          {errors.name && <span className="text-red-500">{errors.name}</span>}
          <label className="mt-3 font-bold  text-white">Image</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder='Image'
            className="py-2 px-3 text-black mt-1  border rounded"
          />
{errors.image && <span className="text-red-500">{errors.image}</span>}
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
          {errors.category && <span className="text-red-500">{errors.category}</span>}
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
{errors.subcategory && <span className="text-red-500">{errors.subcategory}</span>}
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
          {errors.price && <span className="text-red-500">{errors.price}</span>}
          <label className="mb-1 font-bold mt-3 text-white">Discount</label> 
            <input
            type="number"
            name="discount"  
            value={product.discount}
            onChange={handleChange}  
            placeholder='Discount'
            className="py-2 px-3  border rounded"
            />
 {errors.discount && <span className="text-red-500">{errors.discount}</span>}
          <label className="mb-1 font-bold mt-3 text-white">Link</label> 
           <input
            type="text"
            name="link"   
            value={product.link}
            onChange={handleChange} 
            placeholder='Link'
            className="py-2 px-3  border rounded"
          />
           {errors.link && <span className="text-red-500">{errors.link}</span>}
      {loading ?
       <button disabled={loading} type="submit" className="py-2 px-4 mt-5 h-[50px]  bg-black text-white rounded relative"><Loader /></button> 
       :
       <button disabled={loading} type="submit" className="py-2 px-4 mt-5  bg-yellow-500 text-white rounded relative">Add Product </button> 
      }
          
          
        </div>
        </form>
       <CustomizedSnackbars show={open} onClose={handleClose} success={result} />
    </div>
  )
}

export default AddProduct