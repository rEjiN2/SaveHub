import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const editProduct = async (product: any) => {
  const { data } = await axios.put('/api/editProduct', product);
  return data;
};

const useEditProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(editProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });
};

export default useEditProduct;
