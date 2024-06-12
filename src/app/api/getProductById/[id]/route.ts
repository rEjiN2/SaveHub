import { NextRequest,NextResponse } from 'next/server';
import pool from '../../../../utils/db';



export const dynamic = 'force-dynamic'
export async function GET(req: NextRequest,{params}:any): Promise<NextResponse> {
    try {
        const client = await pool.connect();
            
        const productId = params.id;
        console.log(productId, 'Product ID');
        const result = await client.query('SELECT * FROM product WHERE id = $1', [productId]);

        client.release();

        // Check if the product was found
        if (result.rows.length === 0) {
            return new NextResponse(JSON.stringify({ message: 'Product not found' }), { status: 404 });
        }

        // Return the fetched product
        const product = result.rows[0];
        console.log(product,'prod');
        
        return new NextResponse(JSON.stringify(product), { status: 200 });
        
      } catch (error) {
        console.error('Error fetching products:', error);
        return new NextResponse(JSON.stringify('error'), { status: 500 });
      }
}