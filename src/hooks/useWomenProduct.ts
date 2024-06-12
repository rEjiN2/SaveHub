import { useQuery } from 'react-query';
import axios from 'axios';

const useWomenProducts = () => {
  return useQuery('womenProducts', async () => {
    const { data } = await axios.get('/api/getWomenClothing');
    return data;
  });
};

export default useWomenProducts;
