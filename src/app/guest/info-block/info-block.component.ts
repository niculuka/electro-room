import { Component } from '@angular/core';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.css']
})
export class InfoBlockComponent {

  cards = [
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
    {
      icon: "security",
      title: "Siguranta 100%",
      subtitle: "Doar plati securizate"
    },
    {
      icon: "category",
      title: "Livrari din stoc",
      subtitle: "Gama larga de produse"
    },
  ]
}
