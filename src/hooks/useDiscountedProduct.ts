"use client"
import { useQuery } from 'react-query';
import axios from 'axios';

const useDiscountedProducts = () => {
  return useQuery('discountedProducts', async () => {
    const { data } = await axios.get('/api/getTodaysOffer');
    return data;
  });
};

export default useDiscountedProducts;
