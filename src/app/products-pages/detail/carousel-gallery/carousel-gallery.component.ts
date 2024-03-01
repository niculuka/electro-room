import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

export class CarousselGallery {
  imageId: number | undefined;
  image: string = "";
  idGet: number = 0;
}

@Component({
  selector: 'app-carousel-gallery',
  templateUrl: './carousel-gallery.component.html',
  styleUrls: ['./carousel-gallery.component.css']
})
export class CarouselGalleryComponent implements OnInit {  
  
  // productImages2: Array<CarouselLaptopData> = CAROUSEL_LAPTOP;
  @Input() productImages: Array<CarousselGallery> = [];
  @Output() indexEvent = new EventEmitter<number>();

  currentSelectedObject: any;

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

  ngOnInit(): void {
    this.currentSelectedObject = this.productImages[0];
  }
  
  sendCurrentImage(selectedObject: any) {
    this.currentSelectedObject = selectedObject;
    this.indexEvent.emit(selectedObject.image);
  }

}