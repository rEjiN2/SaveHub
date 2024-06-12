"use client"

import { useQuery, useQueryClient, useMutation  } from 'react-query';
import useServices from '@/services/useServices';
import { useParams } from "next/navigation";



const useProductById = () =>{
    const params = useParams()
    return useQuery(['products'],() => useServices.getProductById(params))
}

export default useProductById;