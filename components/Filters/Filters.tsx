'use client';

import { useCarsStore } from '@/lib/store/carStore';
import MileageInputs from '../MileageInput/page';
import css from './Filters.module.css';
import { PRICES } from '@/types/cars';
import { useEffect, useState } from 'react';
import Container from '../Container/page';

export default function Filters() {
  const fetchCars = useCarsStore((state) => state.fetchCars);
  const [brands, setBrands] = useState<string[]>([]);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch('/api/brands')
      .then((res) => res.json())
      .then(setBrands)
      .catch(console.error);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    fetchCars({
      brand: form.brand.value || undefined,
      rentalPrice: form.rentalPrice.value || undefined,
      minMileage: form.from.value.replace(/\D/g, '') || undefined,
      maxMileage: form.to.value.replace(/\D/g, '') || undefined,
    });
  };

  return (
    <Container>
      <section className={css.filterContainer}>
        <form className={css.filter} onSubmit={handleSubmit}>
          <div className={css.group}>
            <label className={css.label}>
              Car brand
              <div className={css.selectContainer}>
                <select
                  className={css.select}
                  name="brand"
                  defaultValue=""
                  onClick={() => setIsBrandOpen((prev) => !prev)}
                  onBlur={() => setIsBrandOpen(false)}
                >
                  <option className={css.option} value="">
                    Choose a brand
                  </option>

                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
                <span className={css.icon}>
                  <svg width="16" height="16" aria-hidden="true">
                    <use
                      href={`/symbol-defs.svg#${isBrandOpen ? 'icon-active' : 'icon-default'}`}
                    />
                  </svg>
                </span>
              </div>
            </label>
          </div>
          <div className={css.group}>
            <label className={css.label}>
              Price/ 1 hour
              <div className={css.selectContainer}>
                <select
                  className={css.select}
                  name="rentalPrice"
                  defaultValue=""
                  onClick={() => setIsOpen((prev) => !prev)}
                  onBlur={() => setIsOpen(false)}
                >
                  <option value="" disabled>
                    Choose a price
                  </option>

                  {PRICES.map((price) => (
                    <option key={price} value={price}>
                      To ${price}
                    </option>
                  ))}
                </select>
                <span className={css.icon}>
                  <svg width="16" height="16" aria-hidden="true">
                    <use href={`/symbol-defs.svg#${isOpen ? 'icon-active' : 'icon-default'}`} />
                  </svg>
                </span>
              </div>
            </label>
          </div>
          <div className={css.group}>
            <MileageInputs />
          </div>
          <div className={css.buttonWrap}>
            <button className={css.btn} type="submit">
              Search
            </button>
            {/* <button className={css.btn} type="button" onClick={() => fetchCars({})}>
              Reset
            </button> */}
          </div>
        </form>
      </section>
    </Container>
  );
}
