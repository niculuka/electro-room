import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CAROUSEL, Carousel } from 'src/app/shared/data/carousel.data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  images: Array<Carousel> = CAROUSEL;

  images2 = [
    '/assets/carousel/romb1.png',
    '/assets/carousel/romb2.png',
    '/assets/carousel/romb3.png'
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | any;

}
