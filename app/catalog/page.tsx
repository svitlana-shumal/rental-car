'use client';

import Container from '@/components/Container/page';
import Filters from '@/components/Filters/Filters';
import Loader from '@/components/Loader/Loader';
import { useCarsStore } from '@/lib/store/carStore';
import CarList from '@/components/CarList/CarList';

export default function Catalog() {
  const { cars, loadMore, page, totalPages, isLoading } = useCarsStore();

  return (
    <main>
      <Container>
        <Filters />
        {isLoading && page === 1 && <Loader />}

        <CarList />

        {/* {page <= totalPages && (
          <button className={css.button} onClick={loadMore} disabled={isLoading}>
            Load More
          </button>
        )} */}
      </Container>
    </main>
  );
}
