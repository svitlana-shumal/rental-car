'use client';

import Container from '@/components/Container/page';
import Filters from '@/components/Filters/Filters';
import Loader from '@/components/Loader/Loader';
import { useCarsStore } from '@/lib/store/carStore';
import CarList from '@/components/CarList/CarList';
import NotFound from '@/components/NotFound/NotFound';

export default function Catalog() {
  const { cars, loadMore, page, totalPages, isLoading } = useCarsStore();

  return (
    <main>
      <Container>
        <Filters />
        {isLoading && page === 1 && <Loader />}
        <CarList />
        {/* {cars.length > 0 ? <CarList /> : <NotFound />} */}
      </Container>
    </main>
  );
}
