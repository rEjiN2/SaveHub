import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../../utils/db';

export const dynamic = 'force-dynamic';

export async function PUT(req: NextRequest, { params }: any): Promise<NextResponse> {
    try {
        const client = await pool.connect();

        // Get the product ID from the request parameters
        const productId = params.id;
          
          
        // Parse the request body to get updated product data
        const { name, image, category, subcategory, price, discount, link } = await req.json();
      
    
        // Execute the SQL update statement
        const result = await client.query(
            'UPDATE product SET name = $1, image = $2, category = $3, subcategory = $4, price = $5, discount = $6, link = $7 WHERE id = $8 RETURNING *',
            [name, image, category, subcategory, price, discount, link, productId]
        );

        // Release the client back to the pool
        client.release();

        // Check if the product was updated
        if (result.rowCount === 0) {
            return new NextResponse(JSON.stringify({ message: 'Product not found' }), { status: 404 });
        }

        // Return the updated product
         const updatedProduct = result.rows[0];
         return new NextResponse(JSON.stringify(updatedProduct), { status: 200 });
        // return new NextResponse(JSON.stringify("updatedProduct"), { status: 200 });

    } catch (error) {
        console.error('Error updating product:', error);
        return new NextResponse(JSON.stringify({ message: 'Error updating product' }), { status: 500 });
    }
}
