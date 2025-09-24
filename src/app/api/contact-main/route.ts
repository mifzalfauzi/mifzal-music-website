import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const apiUrl = process.env.API_URL; // server-side only

  try {
    const formData = await req.json(); // get data sent from frontend

    const response = await fetch(`${apiUrl}/contact/main`, { // your backend endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    // Handle validation errors from backend
    if (response.status === 422) {
      return NextResponse.json(
        { detail: data.detail || 'Please check your input and try again.' },
        { status: 422 }
      );
    }

    // Success response
    return NextResponse.json(data, { status: response.status });
  } catch (err) {
    console.error('API route error:', err);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
