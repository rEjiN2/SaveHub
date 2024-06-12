import { NextRequest, NextResponse } from 'next/server';
import pool from '@/utils/db';

export const dynamic = 'force-dynamic';
export async function GET(req: NextRequest): Promise<NextResponse> {
    try {
        const client = await pool.connect();

        const query = `
            SELECT * FROM product
            WHERE category = 'Accessories';
        `;

        const { rows: products } = await client.query(query);

        client.release();
        return new NextResponse(JSON.stringify(products), { status: 200 });
    } catch (error) {
        console.error('Error fetching accessories products:', error);
        return new NextResponse(JSON.stringify({ error: 'Error fetching accessories products' }), { status: 500 });
    }
}
