import { Component } from '@angular/core';
import { MenuService } from './shared/services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'electro-room';
  
  isMobileMenuOpen = false;

  constructor(
    private menuService: MenuService,
  ) {
    this.menuService.handleMobileMenuObservable().subscribe(data => {
      this.isMobileMenuOpen = data;
    })
  }

  
}
