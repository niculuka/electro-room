import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-owl-dps',
  templateUrl: './carousel-owl-dps.component.html',
  styleUrls: ['./carousel-owl-dps.component.css']
})
export class CarouselOwlDpsComponent {

  carouselTitle:string = "PC-uri si Monitoare:";
  productType1: string = "pc";
  productType2: string = "monitor";
  productIds: Array<number> = [72, 84, 74, 80, 76, 81, 75, 78, 82, 73, 83, 85, 71];

}
