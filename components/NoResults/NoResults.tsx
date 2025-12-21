'use client';

import Container from '../Container/page';
import css from './NoResults.module.css';

export default function NoResults() {
  return (
    <section className={css.noResults}>
      <Container>
        <h2 className={css.title}>No cars found</h2>
        <p className={css.message}>
          Try changing your search parameters — brand, price or mileage — to see available cars.
        </p>
      </Container>
    </section>
  );
}
