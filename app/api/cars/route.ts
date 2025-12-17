// import { NextResponse } from 'next/server';
// import { Car } from '@/types/cars';

// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);

//   const brand = searchParams.get('brand');
//   const rentalPrice = searchParams.get('rentalPrice');
//   const minMileage = searchParams.get('minMileage');
//   const maxMileage = searchParams.get('maxMileage');
//   const page = Number(searchParams.get('page') || 1);
//   const limit = Number(searchParams.get('limit') || 4);

//   let filtered = Car;

//   if (brand) filtered = filtered.filter((c) => c.brand === brand);
//   if (rentalPrice) filtered = filtered.filter((c) => Number(c.rentalPrice) <= Number(rentalPrice));
//   if (minMileage) filtered = filtered.filter((c) => c.mileage >= Number(minMileage));
//   if (maxMileage) filtered = filtered.filter((c) => c.mileage <= Number(maxMileage));

//   const start = (page - 1) * limit;
//   const end = start + limit;

//   return NextResponse.json(filtered.slice(start, end));
// }
