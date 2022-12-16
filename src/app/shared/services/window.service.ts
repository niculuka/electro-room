import { BreakpointObserver } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BREAK_POINTS } from '../constants/breakpoints';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  public picsNumber: number = 6;
  private picsNumberSubject: BehaviorSubject<number> = new BehaviorSubject(this.picsNumber);

  destroyed = new Subject<void>();
  currentScreenSize: string = "";

  displayNameMap = new Map([
    [BREAK_POINTS.XXSmall, 'XXSmall'],
    [BREAK_POINTS.XSmall, 'XSmall'],
    [BREAK_POINTS.Small, 'Small'],
    [BREAK_POINTS.Medium, 'Medium'],
    [BREAK_POINTS.Large, 'Large'],
    [BREAK_POINTS.XLarge, 'XLarge'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        BREAK_POINTS.XXSmall,
        BREAK_POINTS.XSmall,
        BREAK_POINTS.Small,
        BREAK_POINTS.Medium,
        BREAK_POINTS.Large,
        BREAK_POINTS.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
            if (this.currentScreenSize === "XXSmall") this.picsNumber = 1;
            if (this.currentScreenSize === "XSmall") this.picsNumber = 2;
            if (this.currentScreenSize === "Small") this.picsNumber = 3;
            if (this.currentScreenSize === "Medium") this.picsNumber = 4;
            if (this.currentScreenSize === "Large") this.picsNumber = 5;
            if (this.currentScreenSize === "XLarge") this.picsNumber = 6;
            this.picsNumberSubject.next(this.picsNumber);
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  gePicsNumberObservable(): Observable<number> {
    return this.picsNumberSubject.asObservable();
  }

}
