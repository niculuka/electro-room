import { Injectable, OnDestroy } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CurrentUrl implements OnDestroy {

    event$;
    public currentLink: string = "";
    private currentLinkSubject = new BehaviorSubject(this.currentLink);

    constructor(
        private router: Router,
    ) {
        this.event$ = this.router.events.subscribe((event: NavigationEvent) => {
            if (event instanceof NavigationStart) {
                this.currentLink = event.url;
                this.currentLinkSubject.next(this.currentLink);
            }
        });
    }

    reloadHomePage() {
        this.currentLink = "/";
        this.currentLinkSubject.next(this.currentLink);
    }

    getCurrentUrlObservable(): Observable<any> {
        return this.currentLinkSubject.asObservable();
    }

    ngOnDestroy() {
        this.event$?.unsubscribe();
    }

}