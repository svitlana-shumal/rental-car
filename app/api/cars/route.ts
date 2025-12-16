// import { NextRequest, NextResponse } from 'next/server';
// import { api } from '../api';
// import { isAxiosError } from 'axios';

// export async function GET(request: NextRequest) {
//   try {
//     const brand = String(request.nextUrl.searchParams.get('brand') ?? undefined);
//     const rentalPrice = String(request.nextUrl.searchParams.get('rentalPrice') ?? undefined);
//     const minMileage = request.nextUrl.searchParams.get('from') ?? undefined;
//     const maxMileage = request.nextUrl.searchParams.get('to') ?? undefined;
//     const limit = String(request.nextUrl.searchParams.get('limit') ?? 4);
//     const page = String(request.nextUrl.searchParams.get('page') ?? 1);

//     const response = await api.get('/cars', {
//       params: {
//         brand,
//         rentalPrice,
//         minMileage,
//         maxMileage,
//         limit,
//         page,
//       },
//     });
//     return NextResponse.json(response.data, { status: response.status });
//   } catch (error) {
//     if (isAxiosError(error)) {
//       return NextResponse.json(
//         {
//           error: error.message,
//           response: error.response?.data,
//         },
//         { status: error.response?.status }
//       );
//     }
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }
