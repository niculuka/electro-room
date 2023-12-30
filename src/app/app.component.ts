import { Component } from '@angular/core';
import { MenuService } from './shared/services/menu.service';
import { HandleWindow } from './shared/models/handle-window.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'electro-room';

  handleWindow: HandleWindow = new HandleWindow();

  constructor(
    private menuService: MenuService,
  ) {
    this.menuService.getHandleWindowObservable().subscribe(data => {
      this.handleWindow = data;
    });
  }

}
