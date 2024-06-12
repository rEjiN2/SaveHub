import { useQuery, useQueryClient, useMutation  } from 'react-query';
import useServices from '@/services/useServices';


const useProducts = () => {
  return useQuery(['products'], () => useServices.getAllProduct());
};



export default useProducts;
