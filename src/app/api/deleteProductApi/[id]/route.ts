import { NextRequest,NextResponse } from 'next/server';
import pool from '../../../../utils/db';



export const dynamic = 'force-dynamic'
export async function DELETE(req: NextRequest,{params}:any): Promise<NextResponse> {
    try {
        const client = await pool.connect();  
        const productId = params.id;
         const result = await client.query('DELETE FROM product WHERE id = $1', [productId]);

        // Release the client back to the pool
        client.release();

        // Check if the product was deleted
        if (result.rowCount === 0) {
            return new NextResponse(JSON.stringify('Product not found'), { status: 404 });
        }

        // Return a success message
        return new NextResponse(JSON.stringify('Product deleted'), { status: 200 });
        
      } catch (error) {
        console.error('Error fetching products:', error);
        return new NextResponse(JSON.stringify('error'), { status: 500 });
      }
}