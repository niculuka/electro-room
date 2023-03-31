import { Component } from '@angular/core';

@Component({
  selector: 'info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.css']
})
export class InfoBlockComponent {

  leftCards = [
    {
      icon: "local_shipping",
      title: "Transport gratuit",
      subtitle: "Comenzi peste 100 lei"
    },
    {
      icon: "phone_in_talk",
      title: "Suport 24/7",
      subtitle: "Sunati-ne oricand!"
    },
  ]

  rightCards = [
    {
      icon: "credit_card",
      title: "100% sigur",
      subtitle: "Doar plati securizate"
    },
    {
      icon: "category",
      title: "Livrari din stoc",
      subtitle: "Gama larga de produse"
    },
  ]
}
