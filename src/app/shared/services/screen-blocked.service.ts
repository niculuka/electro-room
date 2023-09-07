import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ScreenBlockedService {

    public isBlockedService: boolean = false;
    private isBlockedServiceSubject= new BehaviorSubject(this.isBlockedService);

    freeze(){
        this.isBlockedServiceSubject.next(this.isBlockedService);
        // console.log(this.isBlockedService);
    }

    getFreezeObservable() {
        return this.isBlockedServiceSubject.asObservable();
      }
}