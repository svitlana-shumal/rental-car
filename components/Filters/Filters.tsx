'use client';

import { useCarsStore } from '@/lib/store/carStore';
import MileageInputs from '../MileageInput/page';
import css from './Filters.module.css';
import { PRICES } from '@/types/cars';
import { useEffect, useState } from 'react';
import Container from '../Container/page';
import CustomSelect from '../CustomSelect/CustomSelect';
import NoResults from '../NoResults/NoResults';

export default function Filters() {
  const cars = useCarsStore((state) => state.cars);
  const fetchCars = useCarsStore((state) => state.fetchCars);
  const resetFilters = useCarsStore((state) => state.resetFilters);
  const [brands, setBrands] = useState<string[]>([]);
  const [minMileage, setMinMileage] = useState<string | undefined>();
  const [maxMileage, setMaxMileage] = useState<string | undefined>();

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/brands`)
      .then((res) => res.json())
      .then(setBrands)
      .catch(console.error);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchCars({
      brand: selectedBrand || undefined,
      rentalPrice: selectedPrice !== null ? String(selectedPrice) : undefined,
      minMileage,
      maxMileage,
    });
  };

  const handleReset = async () => {
    await resetFilters();
    setMinMileage(undefined);
    setMaxMileage(undefined);
    setSelectedBrand(null);
    setSelectedPrice(null);

    const form = document.querySelector('form');
    form?.reset();
  };

  return (
    <Container>
      <section className={css.filterContainer}>
        <form className={css.filter} onSubmit={handleSubmit}>
          <CustomSelect
            label="Car brand"
            name="brand"
            options={brands}
            placeholder="Choose a brand"
            value={selectedBrand}
            onChange={(v) => setSelectedBrand(v as string | null)}
          />

          <CustomSelect
            label="Price / 1 hour"
            name="rentalPrice"
            options={PRICES}
            placeholder="Choose a price"
            formatSelected={(v) => `To $${v}`}
            value={selectedPrice}
            onChange={(v) => setSelectedPrice(v as number | null)}
          />

          <MileageInputs
            from={minMileage}
            to={maxMileage}
            onChange={(from, to) => {
              setMinMileage(from);
              setMaxMileage(to);
            }}
          />
          <div className={css.buttonWrap}>
            <button className={css.btn} type="submit">
              Search
            </button>
            {}
            <button className={css.btn} type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
        {cars.length === 0 && <NoResults />}
      </section>
    </Container>
  );
}
