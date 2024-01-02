import { Component, OnDestroy } from '@angular/core';
import { OverlayerService } from './shared/services/overlayer.service';
import { Overlayer } from './shared/models/overlayer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy {

  title = 'electro-room';

  overlayer: Overlayer = new Overlayer();

  private sub0: any;

  constructor(
    private overlayerService: OverlayerService,
  ) {
    this.sub0 = this.overlayerService.getOverlayerObservable().subscribe(data => {
      this.overlayer = data;
    });
  }

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
  }

}
