import axios from 'axios';
import { CarsResponse, Car } from '@/types/cars';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  withCredentials: false,
});

export const getCars = async (params: {
  page?: number;
  limit?: number;
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
}): Promise<CarsResponse> => {
  const { data } = await api.get<CarsResponse>('/cars', { params });
  return data;
};

export const getCarById = async (id: string): Promise<Car> => {
  const { data } = await api.get<Car>(`/cars/${id}`);
  return data;
};
