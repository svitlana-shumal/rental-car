// 'use client';

// import { useFavoritesStore } from '@/lib/store/favoritesStore';
// import css from './CarCard.module.css';
// import { Car } from '@/types/cars';
// import Container from '../Container/page';
// import Image from 'next/image';

// export default function CarCard({ car }: { car: Car }) {
//   const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
//   const isFavorite = useFavoritesStore((state) => state.favorites.includes(car.id));

//   return (
//     <Container>
//       <div className={css.card}>
//         <Image src={car.img} alt={car.model} width={276} height={268} className={css.image} />

//         <div className={css.info}>
//           <h3 className={css.title}>
//             {car.brand} {car.model} {car.year}
//           </h3>
//           <p className={css.price}>${car.rentalPrice} / hour</p>
//           <p className={css.mileage}>Mileage: {car.mileage}</p>
//         </div>

//         <button
//           className={`${css.favoriteBtn} ${isFavorite ? css.active : ''}`}
//           onClick={() => toggleFavorite(car.id)}
//         >
//           {isFavorite ? 'Remove' : 'Add to favorites'}
//         </button>
//       </div>
//     </Container>
//   );
// }
