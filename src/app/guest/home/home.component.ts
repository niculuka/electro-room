import { Component } from '@angular/core';
import { CAROUSEL, CATEGORY } from 'src/app/shared/enums/electro.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  carousel1 = {
    title: CAROUSEL.CAROUSEL_OWL_1,
    products1: CATEGORY.LAPTOP_URL_KEY,
    products2: CATEGORY.LAPTOP_ACCESSORY_URL_KEY,
    ids: [1, 42, 37, 5, 7, 68, 50, 38, 42, 10, 45, 63, 67, 30, 35, 20],
  }

  carousel2 = {
    title: CAROUSEL.CAROUSEL_OWL_2,
    products1: CATEGORY.PC_URL_KEY,
    products2: CATEGORY.MONITOR_URL_KEY,
    ids: [72, 84, 74, 80, 76, 81, 75, 78, 82, 73, 83, 85, 71],
  }

}
