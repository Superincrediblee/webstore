import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    const url = `https://fe-task-api.mainstack.io/transactions`;
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
