import { City } from './city';

export interface TechEvent {
  id: number;
  isFree: boolean;
  name: string;
  city: City;
  startDate: string;
  endDate: string;
  duration: number;
}
