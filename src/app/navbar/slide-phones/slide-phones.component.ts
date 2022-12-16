import { Component } from '@angular/core';
import { PhoneCards, PHONE_SLIDE } from 'src/app/shared/data/slide-phone.data';
import { WindowService } from 'src/app/shared/services/window.service';

@Component({
  selector: 'slide-phones',
  templateUrl: './slide-phones.component.html',
  styleUrls: ['./slide-phones.component.css']
})
export class SlidePhonesComponent {

  phoneCards: Array<PhoneCards> = PHONE_SLIDE;

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
    if (this.counter < (this.phoneCards.length / this.picsNumber) - 1) {
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
    if (this.counter >= (this.phoneCards.length / this.picsNumber) - 1) {
      this.isPreviousVisible = true;
      this.isNextVisible = false;
    }
    if (this.counter > 0 && this.counter < (this.phoneCards.length / this.picsNumber) - 1) {
      this.isPreviousVisible = true;
      this.isNextVisible = true;
    }
  }

}
