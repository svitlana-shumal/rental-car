'use client';

import Container from '@/components/Container/page';
import css from './Catalog.module.css';
import Filters from '@/components/Filters/Filters';
import Loader from '@/components/Loader/Loader';
import { useCarsStore } from '@/lib/store/carStore';

export default function Catalog() {
  const { cars, loadMore, page, totalPages, isLoading } = useCarsStore();
  return (
    <main>
      <Container>
        <Filters />
        {/* <Loader /> */}
        {page <= totalPages && (
          <button className={css.button} onClick={loadMore} disabled={isLoading}>
            Load More
          </button>
        )}
      </Container>
    </main>
  );
}
