'use client';

import Container from '@/components/Container/page';
import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <Container>
      <div className={css.noResults}>
        <p>No cars match your filters</p>
        <p>Try adjusting your search criteria</p>
      </div>
    </Container>
  );
};

export default NotFound;
