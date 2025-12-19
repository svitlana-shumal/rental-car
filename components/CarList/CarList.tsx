'use client';

import { useEffect, useState } from 'react';
import { useCarsStore } from '@/lib/store/carStore';
import css from './CarList.module.css';
import Link from 'next/link';
import Loader from '../Loader/Loader';
import Image from 'next/image';

export default function CarList() {
  const { cars, fetchCars, loadMore, isLoading, page, totalPages } = useCarsStore();
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(stored);
    fetchCars();
  }, []);

  const toggleFavorite = (id: string) => {
    let updated;
    if (favorites.includes(id)) {
      updated = favorites.filter((favId) => favId !== id);
    } else {
      updated = [...favorites, id];
    }
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <section className={css.catalog}>
      <ul className={css.list}>
        {cars.map((car) => {
          const parts = car.address.split(',').map((p) => p.trim());
          const city = parts[parts.length - 2];
          const country = parts[parts.length - 1];
          const isFavorite = favorites.includes(car.id);
          return (
            <li key={car.id} className={css.card}>
              <div className={css.imageWrapper}>
                <Image
                  src={car.img}
                  alt={car.model}
                  width={276}
                  height={268}
                  className={css.image}
                />
                <button className={css.heartButton} onClick={() => toggleFavorite(car.id)}>
                  <svg width="16" height="16">
                    <use
                      href={`/symbol-defs.svg#${isFavorite ? 'icon-heart' : 'icon-white-heart'}`}
                    />
                  </svg>
                </button>
              </div>
              <div className={css.header}>
                <h3 className={css.title}>
                  {car.brand}
                  <span className={css.model}> {car.model}</span>, {car.year}
                </h3>
                <span className={css.price}> ${car.rentalPrice}</span>
              </div>
              <div className={css.locationDiv}>
                <p className={css.location}>
                  {city} | {country} | {car.rentalCompany}
                </p>
                <p className={css.location}>
                  {car.type} | {car.mileage.toLocaleString('uk-UA')} km
                </p>
              </div>
              <Link href={`/catalog/${car.id}`} className={css.button}>
                Read more
              </Link>
            </li>
          );
        })}
      </ul>
      {page < totalPages && (
        <button className={css.loadMore} onClick={loadMore} disabled={isLoading}>
          {isLoading ? <Loader /> : 'Load more'}
        </button>
      )}
    </section>
  );
}
