import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ImagesGallery } from 'src/app/shared/models/images-gallery.model';

@Component({
  selector: 'carousel-gallery',
  templateUrl: './carousel-gallery.component.html',
  styleUrls: ['./carousel-gallery.component.css']
})
export class CarouselGalleryComponent {
  
  // productImages2: Array<CarouselLaptopData> = CAROUSEL_LAPTOP;
  @Input() productImages: Array<ImagesGallery> = [];
  @Output() indexEvent = new EventEmitter<number>();

  isDragging: boolean = false;
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    navText: ['《', '》'],
    responsive: {
      0: {
        items: 4
      },
      1600: {
        items: 4
      },
    },
    dots: false,
    nav: true
  }

  sendCurrentImage(selectedObject: any) {
    this.indexEvent.emit(selectedObject.image);
  }

}
