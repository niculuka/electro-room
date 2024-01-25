import { Component } from '@angular/core';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  carousel1 = {
    title: CATEGORY.CAROUSEL_OWL_1,
    products1: CATEGORY.LAPTOP,
    products2: CATEGORY.LAPTOP_ACCESSORY,
    ids: [1, 42, 37, 5, 7, 68, 50, 38, 42, 10, 45, 63, 67, 30, 35, 20],
  }

  carousel2 = {
    title: CATEGORY.CAROUSEL_OWL_2,
    products1: CATEGORY.PC,
    products2: CATEGORY.MONITOR,
    ids: [72, 84, 74, 80, 76, 81, 75, 78, 82, 73, 83, 85, 71],
  }

}
