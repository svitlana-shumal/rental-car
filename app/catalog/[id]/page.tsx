'use client';

import { useEffect, useState, use } from 'react';
import Container from '@/components/Container/page';
import { getCarById } from '@/lib/api';
import Image from 'next/image';
import { Car } from '@/types/cars';
import Loader from '@/components/Loader/Loader';
import css from './Car.module.css';

type Props = { params: Promise<{ id: string }> };

export default function CarDetailsPage({ params }: Props) {
  const { id } = use(params);
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    if (!id) return;
    getCarById(id).then(setCar);
  }, [id]);

  if (!car) return <Loader />;

  const parts = car.address.split(',').map((p) => p.trim());
  const city = parts[parts.length - 2];
  const country = parts[parts.length - 1];
  const iconCheck = '/symbol-defs.svg#icon-check-circle';

  return (
    <Container>
      <section className={css.details}>
        <div className={css.leftBlock}>
          {car.img && (
            <Image
              src={car.img}
              alt={`${car.brand} ${car.model}`}
              width={640}
              height={512}
              className={css.image}
            />
          )}
          <form className={css.form}>{/* тут буде форма */}</form>
        </div>
        <div className={css.info}>
          <div className={css.containerTitle}>
            <h2 className={css.title}>
              {car.brand} {car.model}, {car.year}
              {/* <span className={css.id}>Id: {car.id}</span> */}
            </h2>
            <p className={css.address}>
              <span className={css.icon}>
                <svg width="16" height="16" aria-hidden="true">
                  <use href="/symbol-defs.svg#icon-location" />
                </svg>
              </span>
              {city}, {country}{' '}
              <span className={css.mileage}>Mileage: {car.mileage.toLocaleString('uk-UA')} km</span>
            </p>
            <p className={css.price}>${car.rentalPrice}</p>
            <p className={css.text}>{car.description}</p>
          </div>

          <div className={css.textDetail}>
            <h3 className={css.subTitle}>Rental Conditions:</h3>
            <ul className={css.conditions}>
              {car.rentalConditions.map((text, index) => (
                <li key={index} className={css.item}>
                  <span className={css.icon}>
                    <svg width="16" height="16" aria-hidden="true">
                      <use href={iconCheck} />
                    </svg>
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <h3 className={css.subTitle}>Car Specifications:</h3>
            <ul className={css.conditions}>
              <li className={css.itemSpecs}>
                <span className={css.icon}>
                  <svg width="16" height="16" aria-hidden="true">
                    <use href="/symbol-defs.svg#icon-calendar" />
                  </svg>
                </span>
                Year: {car.year}
              </li>
              <li className={css.itemSpecs}>
                <span className={css.icon}>
                  <svg width="16" height="16" aria-hidden="true">
                    <use href="/symbol-defs.svg#icon-car" />
                  </svg>
                </span>
                Type: {car.type}
              </li>
              <li className={css.itemSpecs}>
                <span className={css.icon}>
                  <svg width="16" height="16" aria-hidden="true">
                    <use href="/symbol-defs.svg#icon-fuel-pump" />
                  </svg>
                </span>
                Fuel Consumption:{car.fuelConsumption}
              </li>
              <li className={css.itemSpecs}>
                <span className={css.icon}>
                  <svg width="16" height="16" aria-hidden="true">
                    <use href="/symbol-defs.svg#icon-gear" />
                  </svg>
                </span>
                Engine Size: {car.engineSize}
              </li>
            </ul>

            <h3 className={css.subTitle}>Accessories and functionalities:</h3>
            <ul className={css.conditions}>
              {[...car.accessories, ...car.functionalities].map((item, index) => (
                <li key={index} className={css.item}>
                  <span className={css.icon}>
                    <svg width="16" height="16" aria-hidden="true">
                      <use href={iconCheck} />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
}
