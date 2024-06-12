import { useQuery } from 'react-query';
import axios from 'axios';

const useElectronicsProducts = () => {
  return useQuery('electronicsProducts', async () => {
    const { data } = await axios.get('/api/getElectronicsApi');
    return data;
  });
};

export default useElectronicsProducts;
