import { create } from 'zustand';
import { Car, CarsResponse } from '@/types/cars';
import { getCars } from '@/lib/api';

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
  resetFilters: () => Promise<void>;
}

export const useCarsStore = create<CarsStore>((set, get) => ({
  cars: [],
  page: 1,
  totalPages: 1,
  isLoading: false,
  filters: {},

  fetchCars: async (newFilters = {}, reset = true) => {
    set({ isLoading: true });
    const currentPage = reset ? 1 : get().page;
    const mergedFilters = { ...get().filters, ...newFilters, page: currentPage, limit: 4 };
    const data: CarsResponse = await getCars(mergedFilters);
    set((state) => ({
      cars: reset ? data.cars : [...state.cars, ...data.cars],
      page: currentPage + 1,
      totalPages: Number(data.totalPages),
      filters: { ...state.filters, ...newFilters },
      isLoading: false,
    }));
  },
  loadMore: async () => {
    await get().fetchCars({}, false);
  },
  resetFilters: async () => {
    set({
      filters: {},
      page: 1,
      cars: [],
    });

    await get().fetchCars({}, true);
  },
}));
