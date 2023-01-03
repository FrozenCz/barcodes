import {LocationModel} from './locationModel';

export interface Barcode {
  id: number;
  name: string;
  found: boolean;
  Location: LocationModel | null;
}
