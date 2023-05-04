import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-laptop-phone-tablet',
  templateUrl: './laptop-phone-tablet.component.html',
  styleUrls: ['./laptop-phone-tablet.component.css']
})
export class LaptopPhoneTabletComponent {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  constructor(private toastrService: ToastrService) { }

  cards = [
    {
      image: "assets/laptops/laptops.png",
      title: "Laptopuri",
      link: "/laptops-phones-tablets/laptops",
    },
    {
      image: "assets/phones/phones.png",
      title: "Telefoane",
      link: "/laptops-phones-tablets",
    },
    {
      image: "assets/tablets/tablets.png",
      title: "Tablete",
      link: "/laptops-phones-tablets",
    },
  ]

  goTo(card: any) {
    if (card.title === "Telefoane" || card.title === "Tablete") {
      this.toastrService.warning("UNDER CONSTRUCTION")
    }
  }
}
