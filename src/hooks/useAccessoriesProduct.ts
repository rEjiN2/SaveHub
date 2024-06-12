import { useQuery } from 'react-query';
import axios from 'axios';

const useAccessoriesProducts = () => {
  return useQuery('accessoriesProducts', async () => {
    const { data } = await axios.get('/api/getAccessoriesApi');
    return data;
  });
};

export default useAccessoriesProducts;
