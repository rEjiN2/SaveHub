import axios from "axios";


class UseService {


 async getAllProduct(){
    const {data} = await axios.get('/api/getProductHub')
    return data
 }

 async getProductById(params:any){
  const {data} = await axios.get(`/api/getProductById/${params.id}`);
  return data
 }
 async updateProduct(id:string, updatedProduct: any){
  const {data} = await axios.put(`/api/updateProduct/${id}`, updatedProduct);
  return data
 }

 async deleteProduct(id: string) {
   const { data } = await axios.delete(`/api/deleteProductApi/${id}`);
   return data;
 }
}





export default new UseService();