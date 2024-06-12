import { NextRequest,NextResponse } from 'next/server';
import pool from '../../../utils/db';



export const dynamic = 'force-dynamic'
export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
       const formData =await req.formData();
       const name = formData.get('name') as string | null;
       const category = formData.get('category') as string | null;
       const subcategory = formData.get('subcategory') as string | null;
       const price = formData.get('price') ? parseFloat(formData.get('price') as string) : null;
       const discount = formData.get('discount') ? parseFloat(formData.get('discount') as string) : null;
       const link = formData.get('link') as string | null;
       const image = formData.get('image') as string | null;
   
       // Debugging output
       console.log({
         name, category, subcategory, price, discount, link, image
       }, 'hui');
       
       const client = await pool.connect();
       const query = `
      INSERT INTO product (name, category, subcategory, price, discount, link, image)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
     
    const values = [name, category, subcategory, price, discount, link, image];

    await client.query(query, values);
    client.release();

    return new NextResponse(JSON.stringify("Product created successfully"), {
        status: 200
    })
    } catch (error) {
        console.error('Error creating product:', error);
        return new NextResponse(JSON.stringify(error), {
            status: 500
        })
    }
}