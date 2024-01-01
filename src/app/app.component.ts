import { Component } from '@angular/core';
import { OverflowService } from './shared/services/overflow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'electro-room';

  isOverflowHidden: boolean = false;

  main: boolean = false;


  constructor(
    private overflowService: OverflowService,
  ) {
    this.overflowService.getOverflowObservable().subscribe(data => {
      this.isOverflowHidden = data;
    });
  }

}
