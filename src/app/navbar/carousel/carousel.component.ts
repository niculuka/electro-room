import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carousel, CAROUSEL, } from 'src/app/shared/data/carousel.data';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images: Array<Carousel> = CAROUSEL;
  counter: number = 0;
  image: Carousel = this.images[this.counter];
  slide: string = this.image.slide;
  
  startTimer: any;
  running = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.start();
  }

  goTo(item: Carousel) {
    this.router.navigate([item.link])
  }

  start() {
    if (!this.running) {
      this.startTimer = setInterval(() => {
        this.image.isChecked = false;
        this.counter++;
        if (this.counter > this.images.length - 1) {
          this.counter = 0;
        }
        this.image = this.images[this.counter];
        this.slide = this.image.slide;
        this.image.isChecked = true;
      }, 4000);
    }
  }

  stop() {
    clearInterval(this.startTimer);
    this.running = false;
  }

  previous() {
    this.image.isChecked = false;
    if (this.counter === 0) {
      this.counter = this.images.length - 1;
    }
    else {
      this.counter--;
    }
    this.image = this.images[this.counter];
    this.slide = this.image.slide;
    this.image.isChecked = true;
  }

  next() {
    this.image.isChecked = false;
    if (this.counter === this.images.length - 1) {
      this.counter = 0;
    }
    else {
      this.counter++;
    }
    this.image = this.images[this.counter];
    this.slide = this.image.slide;
    this.image.isChecked = true;
  }

  getDot(image: Carousel) {
    this.image.isChecked = false;
    this.image = image;
    this.counter = this.image.id;
    this.slide = this.image.slide;
  }
}