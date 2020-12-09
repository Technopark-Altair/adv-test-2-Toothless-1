import { Injectable } from '@angular/core';
import { Cars } from 'src/model/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarServiceService {
  cars: Array<Cars> = [
    {
      id: 0,
      brandName: 'BMW',
      modelName: 'X3 2014 2.0 d',
      priceInRub: 1300000,
    },
    {
      id: 1,
      brandName: 'Hyundai',
      modelName: 'CRETA new 2020',
      priceInRub: 1500000,
    },
    {
      id: 2,
      brandName: 'Mercedec-Benz',
      modelName: 'CLA 2020',
      priceInRub: 2400000,
    },
  ];
  constructor() {}

  getCars() {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars.find((el) => el.id === id);
  }
}
