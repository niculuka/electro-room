import { Component } from '@angular/core';
import { ScreenBlockedService } from './shared/services/screen-blocked.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'electro-room';
  
  isScreenBlocked = false;

  constructor(
    private screenBlockedService: ScreenBlockedService,
  ) {
    this.screenBlockedService.getBlockScreenObservable().subscribe(data => {
      this.isScreenBlocked = data;
      // console.log(this.isScreenBlocked);
    })
  }

  
}
