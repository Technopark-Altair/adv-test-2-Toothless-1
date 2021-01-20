import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cars } from 'src/model/car.model';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent implements OnInit {
  car: Cars;
  @Output() addedNewCar = new EventEmitter<Cars>();
  constructor() {}
  ngOnInit(): void {
    this.car = new Cars();
  }

  addCarInCarsComponent() {
    this.addedNewCar.emit(this.car);
    this.car = new Cars();
  }
}
