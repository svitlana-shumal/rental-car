import { NextResponse } from 'next/server';
import { api } from '@/lib/api';
import { isAxiosError } from 'axios';

export async function GET() {
  try {
    const { data } = await api.get('/brands');
    return NextResponse.json(data);
  } catch (error) {
    if (isAxiosError(error)) {
      return NextResponse.json({ error: error.message }, { status: error.response?.status || 500 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
