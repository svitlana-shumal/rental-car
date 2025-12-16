export interface Car {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];

  functionalities: string[];

  rentalPrice: string;
  rentalCompany: string;
  address: string;

  rentalConditions: string[];

  mileage: number;
}

export interface CarsResponse {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
}

export const PRICES = ['30', '40', '50', '60', '70', '80'];
