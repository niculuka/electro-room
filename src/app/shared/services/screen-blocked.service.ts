import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ScreenBlockedService {

    public isScreenBlocked: boolean = false;
    private isScreenBlockedSubject = new BehaviorSubject(this.isScreenBlocked);

    blockScreen() {
        this.isScreenBlockedSubject.next(this.isScreenBlocked);
    }

    getBlockScreenObservable() {
        return this.isScreenBlockedSubject.asObservable();
    }
}