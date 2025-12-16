// import { api } from './api';
// import { CarsResponse, Car } from '@/types/cars';

// export const getCars = async (params: {
//   page?: number;
//   limit?: number;
//   brand?: string;
//   rentalPrice?: number;
//   mileageFrom?: number;
//   mileageTo?: number;
// }): Promise<CarsResponse> => {
//   const { data } = await api.get<CarsResponse>('/cars', { params });
//   return data;
// };

// export const getCarById = async (id: string): Promise<Car> => {
//   const { data } = await api.get<Car>(`/cars/${id}`);
//   return data;
// };
