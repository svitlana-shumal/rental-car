// 'use client';
// import { useEffect } from 'react';
// import { useCarsStore } from '@/lib/store/carStore';
// import CarCard from '../CarCard/CarCard';
// import css from './CarList.module.css';
// import { Car } from '@/types/cars';

// interface CarCardProps {
//   car: Car;
// }

// export default function CarList({ car }: CarCardProps) {
//   const { cars, fetchCars, loadMore, isLoading, page, totalPages } = useCarsStore();
//   useEffect(() => {
//     fetchCars();
//   }, []);
//   return (
//     <section className={css.catalog}>
//       {' '}
//       <ul className={css.list}>
//         {' '}
//         {cars.map((car) => (
//           <CarCard key={car.id} car={car} />
//         ))}{' '}
//       </ul>{' '}
//       {page <= totalPages && (
//         <button className={css.loadMore} onClick={loadMore} disabled={isLoading}>
//           {' '}
//           {isLoading ? 'Loading…' : 'Load more'}{' '}
//         </button>
//       )}{' '}
//     </section>
//   );
// }
