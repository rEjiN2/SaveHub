"use client"
import { useQuery, useQueryClient, useMutation  } from 'react-query';
import useServices from '@/services/useServices';
import { useParams } from "next/navigation";

interface Product {
  name: string;
  image: string;
  category: string;
  subcategory: string;
  price: number;
  discount: number;
  link: string;
}

const useUpdateProduct = () => {
    const params = useParams();
    const queryClient = useQueryClient();
    console.log(params);
    
    return useMutation(
      (updatedProduct:Product) => {
        return useServices.updateProduct(params.id as string, updatedProduct as Product);
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("product");
        },
      }
    );
  };


export default useUpdateProduct;
