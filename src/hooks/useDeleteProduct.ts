"use client"
import { useQueryClient, useMutation } from 'react-query';
import useServices from '@/services/useServices';

const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (id: string) => {
      return useServices.deleteProduct(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products"); // Ensure to invalidate the correct query key
      },
    }
  );
};

export default useDeleteProduct;
