import { Component } from '@angular/core';
import { MobileMenuService } from './shared/services/mobile-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'electro-room';
  
  isMobileMenuOpen = false;

  constructor(
    private mobileMenuService: MobileMenuService,
  ) {
    this.mobileMenuService.getHandleMobileMenuObservable().subscribe(data => {
      this.isMobileMenuOpen = data;
    })
  }

  
}
