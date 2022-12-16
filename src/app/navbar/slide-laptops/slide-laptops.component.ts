import { Component } from '@angular/core';
import { LaptopCards, LAPTOP_SLIDE } from 'src/app/shared/data/slide-laptop.data';
import { WindowService } from 'src/app/shared/services/window.service';

@Component({
  selector: 'slide-laptops',
  templateUrl: './slide-laptops.component.html',
  styleUrls: ['./slide-laptops.component.css']
})
export class SlideLaptopsComponent {

  laptopCards: Array<LaptopCards> = LAPTOP_SLIDE;

  counter: number = 0;
  slide: string = "";
  picsNumber = 6;

  isPreviousVisible = false;
  isNextVisible = true;

  constructor(
    private windowService: WindowService,
  ) {
    this.windowService.gePicsNumberObservable().subscribe((data) => {
      this.picsNumber = data;
      this.counter = 0;
      this.slide = "left: -" + this.counter + "00%;";
      this.checkConditions();
    });
  }

  previous() {
    if (this.counter > 0) {
      this.counter--;
      this.slide = "left: -" + this.counter + "00%;";
      this.checkConditions();
    }
  }

  next() {
    if (this.counter < (this.laptopCards.length / this.picsNumber) - 1) {
      this.counter++;
      this.slide = "left: -" + this.counter + "00%;";
      this.checkConditions();
    }
  }

  checkConditions() {
    if (this.counter === 0) {
      this.isPreviousVisible = false;
      this.isNextVisible = true;
    }
    if (this.counter >= (this.laptopCards.length / this.picsNumber) - 1) {
      this.isPreviousVisible = true;
      this.isNextVisible = false;
    }
    if (this.counter > 0 && this.counter < (this.laptopCards.length / this.picsNumber) - 1) {
      this.isPreviousVisible = true;
      this.isNextVisible = true;
    }
  }

}
