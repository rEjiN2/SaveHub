import { NextRequest,NextResponse } from 'next/server';
import pool from '../../../utils/db';



export const dynamic = 'force-dynamic'
export async function GET(req: NextRequest): Promise<NextResponse> {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM product');
        client.release();
    
        return new NextResponse(JSON.stringify(result.rows), { status: 200 });
      } catch (error) {
        console.error('Error fetching products:', error);
        return new NextResponse(JSON.stringify({ error: 'Database error' }), { status: 500 });
      }
}