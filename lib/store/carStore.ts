import { create } from 'zustand';
import { Car } from '@/types/cars';

interface Filters {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
}

interface CarsStore {
  cars: Car[];
  page: number;
  totalPages: number;
  isLoading: boolean;
  filters: Filters;

  fetchCars: (filters?: Filters, reset?: boolean) => Promise<void>;
  loadMore: () => Promise<void>;
}

export const useCarsStore = create<CarsStore>((set, get) => ({
  cars: [],
  page: 1,
  totalPages: 1,
  isLoading: false,
  filters: {},

  fetchCars: async (newFilters = {}, reset = true) => {
    set({ isLoading: true });

    const page = reset ? 1 : get().page;

    if (reset) {
      set({ cars: [], page: 1 });
    }

    const params = new URLSearchParams({
      ...get().filters,
      ...newFilters,
      page: page.toString(),
      limit: '4',
    });

    const res = await fetch(`/api/cars?${params}`);
    const data = await res.json();

    set((state) => ({
      cars: reset ? data.cars : [...state.cars, ...data.cars],
      page: data.page + 1,
      totalPages: data.totalPages,
      filters: { ...state.filters, ...newFilters },
      isLoading: false,
    }));
  },

  loadMore: async () => {
    await get().fetchCars({}, false);
  },
}));
