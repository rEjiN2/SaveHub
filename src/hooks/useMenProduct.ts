import { useQuery } from 'react-query';
import axios from 'axios';

const useMenProducts = () => {
  return useQuery('menProducts', async () => {
    const { data } = await axios.get('/api/getMenClothing');
    return data;
  });
};

export default useMenProducts;
