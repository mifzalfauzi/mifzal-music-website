import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const apiUrl = process.env.API_URL; // server-side only

  try {
    const body = await req.json();

    const response = await fetch(`${apiUrl}/contact/epk`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (err) {
    console.error('API route error:', err);
    return NextResponse.json({ error: 'Failed to send contact form' }, { status: 500 });
  }
}
