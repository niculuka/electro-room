import { Component, OnDestroy } from '@angular/core';
import { OverlayerService } from './shared/services/overlayer.service';
import { Overlayer } from './shared/models/overlayer.model';
import { CurrentUrl } from './shared/services/current-url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy {

  title = 'electro-room';

  currentLink: string = "";

  overlayer: Overlayer = new Overlayer();

  private sub0: any;
  private sub1: any;

  constructor(
    private overlayerService: OverlayerService,
    private currentUrl: CurrentUrl,
  ) {
    this.sub0 = this.overlayerService.getOverlayerObservable().subscribe(data => {
      this.overlayer = data;
    });
    this.sub1 = this.currentUrl.getCurrentUrlObservable().subscribe(url => {
      if (url) this.currentLink = url;
    });
  }

  isPageWithNavbar() {
    return this.currentLink.startsWith("/admin")
  }

  isPageWithBreadcrumb() {
    return this.currentLink.startsWith("/depart")
      || this.currentLink.startsWith("/type")
      || this.currentLink.startsWith("/categ")
      || this.currentLink.startsWith("/prod")
      || this.currentLink.startsWith("/special-offer")
      || this.currentLink.startsWith("/customer-support");
  }

  isPageWithFooter() {
    return this.currentLink.startsWith("/auth")
      || this.currentLink.startsWith("/admin")
      || this.currentLink === "/401"
      || this.currentLink === "/404";
  }

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
    this.sub1?.unsubscribe();
  }

}
